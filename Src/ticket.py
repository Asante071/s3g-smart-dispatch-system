class Ticket:
    def __init__(self, id, issue, risk, sla_remaining, status):
        self.id = id
        self.issue = issue
        self.risk = risk
        self.sla_remaining = sla_remaining
        self.status = status

    def update_status(self, status):
        self.status = status

    def calculate_sla(self):
        return self.sla_remaining