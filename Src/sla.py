class SLA:
    def __init__(self, time_remaining):
        self.time_remaining = time_remaining

    def check_breach(self):
        return self.time_remaining <= 0