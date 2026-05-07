from Repositories.Inmemory.inmemory_ticket_repository import InMemoryTicketRepository

class RepositoryFactory:

    @staticmethod
    def get_ticket_repository(storage_type):

        if storage_type == "MEMORY":
            return InMemoryTicketRepository()

        raise ValueError("Invalid storage type")