# Class Diagram – S³G Smart Dispatch System

```mermaid
classDiagram

class Ticket {
-id: int
-issue: string
-risk: string
-slaRemaining: float
-status: string
+updateStatus()
+calculateSLA()
}

class Engineer {
-id: int
-name: string
-workload: int
-availability: string
+assignTask()
+updateAvailability()
}

class SLA {
-id: int
-timeRemaining: float
-status: string
+checkBreach()
+updateSLA()
}

class Alert {
-id: int
-message: string
-status: string
+sendAlert()
+acknowledge()
}

class Report {
-id: int
-type: string
-data: string
+generateReport()
}

class User {
-id: int
-role: string
+login()
+logout()
}

class DispatchEngine {
+recommendEngineer()
}

Ticket "1" --> "1" SLA : has
Ticket "1" --> "1" Engineer : assignedTo
Engineer "1" --> "0..*" Ticket : handles
SLA --> Alert : triggers
Report --> Ticket : uses
User --> Ticket : interactsWith
DispatchEngine --> Engineer : selects
DispatchEngine --> Ticket : evaluates
```

## Explanation

The class diagram represents the core structure of the S³G Smart Dispatch System.

- Ticket is the central entity linked to SLA and Engineer.
- SLA monitors time and triggers alerts when breached.
- Engineer handles multiple tickets based on workload.
- DispatchEngine is responsible for intelligent assignment.

This design aligns with:
- Functional Requirements (Assignment 4)
- Use Cases (Assignment 5)
- State Diagrams (Assignment 8)