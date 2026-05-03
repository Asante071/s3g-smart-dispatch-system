class TicketFactory:
    @staticmethod
    def create_ticket(priority):
        if priority == "low":
            return "Low Priority Ticket"
        elif priority == "high":
            return "High Priority Ticket"
        else:
            return "Normal Ticket"