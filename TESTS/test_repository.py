from repositories.inmemory.inmemory_ticket_repository import InMemoryTicketRepository
from src.ticket import Ticket

def test_save_ticket():

    repo = InMemoryTicketRepository()

    ticket = Ticket(
        1,
        "Network Issue",
        "HIGH",
        2.5,
        "OPEN"
    )

    repo.save(ticket)

    assert repo.find_by_id(1) == ticket


def test_delete_ticket():

    repo = InMemoryTicketRepository()

    ticket = Ticket(
        1,
        "Network Issue",
        "HIGH",
        2.5,
        "OPEN"
    )

    repo.save(ticket)

    repo.delete(1)

    assert repo.find_by_id(1) is None