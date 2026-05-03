class DispatchEngine:
    def recommend_engineer(self, engineers):
        return min(engineers, key=lambda e: e.workload)