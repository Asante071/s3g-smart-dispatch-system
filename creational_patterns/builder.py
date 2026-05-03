class TicketBuilder:
    def __init__(self):
        self.ticket = {}

    def set_issue(self, issue):
        self.ticket["issue"] = issue
        return self

    def set_priority(self, priority):
        self.ticket["priority"] = priority
        return self

    def build(self):
        return self.ticket