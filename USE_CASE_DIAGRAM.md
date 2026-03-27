# Use Case Diagram – S³G Smart Dispatch System

```mermaid
flowchart TD

%% Actors
Manager[IT Service Manager]
Engineer[Field Service Engineer]
Agent[Service Desk Agent]
Admin[IT Administrator]
User[End User]

%% Use Cases
UC1(View Dashboard)
UC2(Log Ticket)
UC3(Calculate SLA)
UC4(Recommend Engineer)
UC5(View Assigned Tasks)
UC6(Update Ticket)
UC7(Generate Report)
UC8(Simulate Crisis)

%% Relationships
Manager --> UC1
Manager --> UC7
Manager --> UC8

Agent --> UC2
Agent --> UC1

Engineer --> UC5
Engineer --> UC6

Admin --> ManageSystem[Manage System]

User --> ReportIssue[Report Issue]

%% Include relationships
UC2 --> UC3
UC3 --> UC4
UC1 --> UC3
```

## Explanation

The system consists of multiple actors interacting with core use cases.

- The **Service Desk Agent** logs tickets, which includes SLA calculation.
- The **SLA Calculation** use case triggers the **Engineer Recommendation** process.
- The **IT Service Manager** monitors the system through the dashboard and can simulate crisis scenarios.
- The **Engineer** interacts with assigned tasks and updates ticket progress.

The inclusion relationships ensure automation of SLA tracking and intelligent dispatching, directly addressing stakeholder concerns such as reducing SLA breaches and improving workload distribution.