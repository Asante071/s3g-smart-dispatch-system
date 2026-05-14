class Engineer:
    def __init__(self, id, name, workload, availability):
        self.id = id
        self.name = name
        self.workload = workload
        self.availability = availability

    def assign_task(self):
        self.workload += 1

    def update_availability(self, status):
        self.availability = status