class Ticket:

    def __init__(
        self,
        id,
        issue,
        risk,
        sla_remaining,
        status,
        engineer="Unassigned"
    ):
        self.id = id
        self.issue = issue
        self.risk = risk
        self.sla_remaining = sla_remaining
        self.status = status
        self.engineer = engineer

    def update_status(self, status):
        self.status = status

    def assign_engineer(self, engineer):
        self.engineer = engineer

    def calculate_sla(self):
        return self.sla_remaining