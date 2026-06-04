# State Transition Diagrams

## 1. Ticket Lifecycle

```mermaid
stateDiagram-v2
[*] --> Created

Created --> Assigned : Assign Engineer
Assigned --> InProgress : Engineer Starts Work
InProgress --> Resolved : Issue Fixed
Resolved --> Closed : Manager Confirms

InProgress --> Escalated : SLA Breach
Escalated --> InProgress : Reassigned
```

### Explanation

This diagram shows how a ticket moves through different states.

- Created → Assigned → In Progress → Resolved → Closed
- Escalation occurs when SLA is breached

This aligns with:
- FR-002 (Log Ticket)
- FR-003 (SLA Monitoring)
- FR-004 (Engineer Recommendation)

## 2. SLA Lifecycle

```mermaid
stateDiagram-v2
[*] --> Active
Active --> Warning : SLA < 1 hour
Warning --> Breached : SLA expired
Breached --> Resolved
Resolved --> Closed
```

### Explanation

This diagram shows how SLA status changes from active to breached.

It aligns with:
- FR-003 (SLA Monitoring)
- US-003 (Calculate SLA)

## 3. Engineer Lifecycle

```mermaid
stateDiagram-v2
[*] --> Available
Available --> Assigned
Assigned --> Busy
Busy --> Available : Task Complete
```

### Explanation

This diagram shows how engineers move between availability states.

It supports:
- FR-004 (Engineer Recommendation)

## 4. Alert Lifecycle

```mermaid
stateDiagram-v2
[*] --> Generated
Generated --> Sent
Sent --> Acknowledged
```

## 5. Report Lifecycle

```mermaid
stateDiagram-v2
[*] --> Requested
Requested --> Processing
Processing --> Generated
Generated --> Viewed
```

## 6. User Session

```mermaid
stateDiagram-v2
[*] --> LoggedOut
LoggedOut --> LoggedIn
LoggedIn --> Active
Active --> LoggedOut
```

## 7. Dispatch Decision

```mermaid
stateDiagram-v2
[*] --> Evaluating
Evaluating --> Assigned
Evaluating --> Rejected
Assigned --> Completed
```