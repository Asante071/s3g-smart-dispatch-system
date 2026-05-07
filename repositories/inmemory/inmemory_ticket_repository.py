from repositories.ticket_repository import TicketRepository

class InMemoryTicketRepository(TicketRepository):

    def __init__(self):
        self.storage = {}

    def save(self, ticket):
        self.storage[ticket.id] = ticket

    def find_by_id(self, id):
        return self.storage.get(id)

    def find_all(self):
        return list(self.storage.values())

    def delete(self, id):
        if id in self.storage:
            del self.storage[id]