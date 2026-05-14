from repositories.inmemory.inmemory_ticket_repository import InMemoryTicketRepository

class TicketService:

    def __init__(self):
        self.repo = InMemoryTicketRepository()

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