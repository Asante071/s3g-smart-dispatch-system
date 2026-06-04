# Activity Diagrams

## 1. Log Ticket Workflow

```mermaid
flowchart TD
Start --> EnterDetails
EnterDetails --> Validate
Validate -->|Valid| SaveTicket
Validate -->|Invalid| Error
SaveTicket --> End
Error --> End
```

### Explanation

This workflow shows how tickets are created and validated before saving.

Aligned with:
- FR-002
- US-002

## 2. SLA Monitoring Workflow

```mermaid
flowchart TD
Start --> CalculateSLA
CalculateSLA --> CheckTime
CheckTime -->|< 1 hour| Warning
CheckTime -->|Expired| Breach
Warning --> End
Breach --> End
```

### Explanation

This workflow shows how SLA is continuously monitored.

It ensures early warnings before breaches.

Aligned with:
- FR-003 (SLA Monitoring)
- US-003 (Calculate SLA)

## 3. Engineer Recommendation Workflow

```mermaid
flowchart TD
Start --> AnalyzeWorkload
AnalyzeWorkload --> SelectEngineer
SelectEngineer --> AssignEngineer
AssignEngineer --> End
```

### Explanation

This workflow selects the most suitable engineer based on workload.

Aligned with:
- FR-004 (Dispatch)
- US-004 (Recommend Engineer)

## 4. Update Ticket Workflow

```mermaid
flowchart TD
Start --> OpenTicket
OpenTicket --> UpdateStatus
UpdateStatus --> SaveChanges
SaveChanges --> End
```

## 5. Generate Report Workflow

```mermaid
flowchart TD
Start --> RequestReport
RequestReport --> ProcessData
ProcessData --> GenerateReport
GenerateReport --> DisplayReport
DisplayReport --> End
```

## 6. Crisis Simulation Workflow

```mermaid
flowchart TD
Start --> TriggerCrisis
TriggerCrisis --> IncreaseRiskLevels
IncreaseRiskLevels --> UpdateDashboard
UpdateDashboard --> End
```

## 7. Alert System Workflow

```mermaid
flowchart TD
Start --> DetectRisk
DetectRisk --> SendAlert
SendAlert --> NotifyUser
NotifyUser --> End
```

## 8. Dashboard Load Workflow

```mermaid
flowchart TD
Start --> FetchData
FetchData --> RenderCharts
RenderCharts --> DisplayDashboard
DisplayDashboard --> End
```

