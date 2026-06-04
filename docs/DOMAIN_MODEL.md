# Domain Model – S³G Smart Dispatch System

## Entities and Relationships

| Entity | Attributes | Methods | Relationships |
|--------|-----------|---------|---------------|
| Ticket | id, issue, risk, slaRemaining, status | updateStatus(), calculateSLA() | Assigned to Engineer |
| Engineer | id, name, workload, availability | assignTask(), updateAvailability() | Handles Tickets |
| SLA | id, timeRemaining, status | checkBreach(), updateSLA() | Linked to Ticket |
| Alert | id, message, status | sendAlert(), acknowledge() | Triggered by SLA |
| Report | id, type, data | generateReport() | Uses Ticket Data |
| User | id, role | login(), logout() | Interacts with System |
| DispatchEngine | logicRules | recommendEngineer() | Assigns Engineers |

---

## Business Rules

- A ticket must always have an SLA.
- An engineer can handle multiple tickets.
- SLA breach triggers alerts.
- High-risk tickets must be prioritized.
- Only available engineers can be assigned tasks.