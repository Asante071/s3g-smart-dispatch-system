from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from services.ticket_service import TicketService
from src.ticket import Ticket


app = FastAPI(
    title="S³G Smart Dispatch System",
    description="""
## Intelligent IT Service Management Platform

The S³G Smart Dispatch System provides:

- Incident Ticket Management
- SLA Monitoring
- Smart Dispatch Workflows
- REST API Integration
- Service Layer Processing
- Repository-Based Data Management

### Software Engineering Features

- FastAPI REST API
- Repository Pattern
- Service Layer Architecture
- Automated Testing with Pytest
- CI/CD with GitHub Actions
- Open Source Collaboration Support
""",
    version="1.0.0",
    contact={
        "name": "Asante Seotsanyana",
        "url": "https://github.com/Asante071"
    },
    license_info={
        "name": "MIT License"
    }
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ticket_service = TicketService()


class TicketRequest(BaseModel):
    id: int
    title: str
    priority: str
    

    model_config = {
        "json_schema_extra": {
            "example": {
                "id": 1,
                "title": "VPN Connection Failure",
                "priority": "HIGH"
            }
        }
    }

class StatusUpdateRequest(BaseModel):
       status: str

class EngineerAssignmentRequest(BaseModel):
    engineer: str


@app.get(
    "/api/tickets",
    tags=["Tickets"],
    summary="Retrieve all tickets",
    description="Returns all incident tickets currently stored in the system."
)
def get_tickets():
    return ticket_service.get_all_tickets()


@app.get(
    "/api/tickets/{ticket_id}",
    tags=["Tickets"],
    summary="Retrieve a ticket by ID",
    description="Returns detailed information about a specific incident ticket."
)
def get_ticket(ticket_id: int):
    return ticket_service.get_ticket(ticket_id)


@app.post(
    "/api/tickets",
    tags=["Tickets"],
    summary="Create a new incident ticket",
    description="Creates a new support ticket and stores it through the service layer."
)
def create_ticket(ticket_request: TicketRequest):

    ticket = Ticket(
        ticket_request.id,
        ticket_request.title,
        ticket_request.priority.upper(),
        2,
        "OPEN"
    )

    return ticket_service.create_ticket(ticket)
@app.put("/api/tickets/{ticket_id}/status")
def update_ticket_status(
    ticket_id: int,
    request: StatusUpdateRequest
):

    ticket = ticket_service.get_ticket(ticket_id)

    if ticket is None:
        return {
            "error": "Ticket not found"
        }

    ticket.update_status(request.status)

    return ticket

@app.put(
    "/api/tickets/{ticket_id}/assign"
)
def assign_engineer(
    ticket_id: int,
    request: EngineerAssignmentRequest
):

    ticket = ticket_service.get_ticket(
        ticket_id
    )

    if ticket is None:

        return {
            "error":
            "Ticket not found"
        }

    ticket.assign_engineer(
        request.engineer
    )

    return ticket
@app.post("/api/process-sla")
def process_sla():

    ticket_service.process_sla_countdown()

    return {
        "message": "SLA countdown processed"
    }