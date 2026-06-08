from repositories.inmemory.inmemory_ticket_repository import InMemoryTicketRepository
from src.ticket import Ticket

class TicketService:

    def __init__(self):

        self.repo = InMemoryTicketRepository()

        # Demo Data
        self.repo.save(
            Ticket(
                1,
                "VPN Connection Failure",
                "HIGH",
                2,
                "OPEN"
            )
        )

        self.repo.save(
            Ticket(
                2,
                "Email Outage",
                "AMBER",
                4,
                "IN_PROGRESS"
            )
        )

        self.repo.save(
            Ticket(
                3,
                "Printer Offline",
                "LOW",
                8,
                "OPEN"
            )
        )

    def create_ticket(self, ticket):

        if ticket.risk not in ["LOW", "AMBER", "HIGH"]:
            raise ValueError(
                "Invalid risk level"
            )

        self.repo.save(ticket)

        return ticket

    def get_all_tickets(self):
        return self.repo.find_all()

    def get_ticket(self, id):
        return self.repo.find_by_id(id)