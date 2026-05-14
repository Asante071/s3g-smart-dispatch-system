class Alert:
    def __init__(self, message):
        self.message = message

    def send_alert(self):
        return f"Alert: {self.message}"