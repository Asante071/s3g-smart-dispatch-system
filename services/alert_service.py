class AlertService:

    def create_alert(
        self,
        message
    ):

        return {
            "status": "ACTIVE",
            "message": message
        }