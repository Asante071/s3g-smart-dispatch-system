class EngineerService:

    def validate_workload(
        self,
        engineer
    ):

        if engineer.workload > 5:

            raise ValueError(
                "Engineer overloaded"
            )

        return True