# Use Case Diagram – S³G Smart Dispatch System

```mermaid
flowchart TD

Manager[IT Service Manager]
Engineer[Field Service Engineer]
Agent[Service Desk Agent]
Admin[IT Administrator]
User[End User]
System[Smart Dispatch System]

Manager --> ViewDashboard
Manager --> GenerateReports

Agent --> LogTicket
Agent --> MonitorTickets

Engineer --> ViewAssignedTasks
Engineer --> UpdateTicket

Admin --> ManageSystem

User --> ReportIssue

ViewDashboard --> CalculateSLA
LogTicket --> CalculateSLA
CalculateSLA --> RecommendEngineer
```

## Explanation

Actors:
- IT Service Manager: Monitors dashboard and generates reports
- Field Engineer: Resolves assigned incidents
- Service Desk Agent: Logs and monitors tickets
- IT Administrator: Maintains system
- End User: Reports issues

Relationships:
- "Log Ticket" includes "Calculate SLA"
- "Calculate SLA" leads to "Recommend Engineer"

This ensures stakeholder concerns such as SLA monitoring and workload balancing are addressed.