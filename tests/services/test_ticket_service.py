from services.ticket_service import TicketService
from src.ticket import Ticket

def test_create_ticket():

    service = TicketService()

    ticket = Ticket(
        1,
        "Network",
        "HIGH",
        2,
        "OPEN"
    )

    result = service.create_ticket(ticket)

    assert result == ticket