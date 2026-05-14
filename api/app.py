from fastapi import FastAPI
from services.ticket_service import TicketService
from src.ticket import Ticket

app = FastAPI(
    title="S³G Smart Dispatch API",
    description="REST API for SLA monitoring and dispatch management",
    version="1.0"
)

ticket_service = TicketService()


@app.get("/api/tickets")
def get_tickets():

    return ticket_service.get_all_tickets()


@app.get("/api/tickets/{ticket_id}")
def get_ticket(ticket_id:int):

    return ticket_service.get_ticket(ticket_id)


@app.post("/api/tickets")
def create_ticket():

    ticket=Ticket(
        1,
        "Network Issue",
        "HIGH",
        2,
        "OPEN"
    )

    return ticket_service.create_ticket(ticket)