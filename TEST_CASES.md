# Test Cases

| Test ID | Requirement ID | Description | Steps | Expected Result | Actual Result | Status |
|--------|---------------|------------|-------|----------------|--------------|--------|
| TC001 | FR-001 | Load dashboard | Open system | Dashboard loads | TBD | TBD |
| TC002 | FR-002 | SLA calculation | Load tickets | SLA updates correctly | TBD | TBD |
| TC003 | FR-003 | SLA breach detection | SLA < 0 | Ticket shows red | TBD | TBD |
| TC004 | FR-004 | Engineer recommendation | Load system | Engineer assigned | TBD | TBD |
| TC005 | FR-005 | Workload chart | Open dashboard | Chart updates | TBD | TBD |
| TC006 | FR-006 | Generate report | Click report button | Report generated | TBD | TBD |
| TC007 | FR-007 | Crisis simulation | Click simulate | Risk increases | TBD | TBD |
| TC008 | FR-008 | Alerts | SLA < 1 | Alert displayed | TBD | TBD |

---

## Non-Functional Test Cases

### Performance Test
- Scenario: Simulate 1000 concurrent users  
- Expected: Response time ≤ 2 seconds  

### Security Test
- Scenario: Unauthorized access  
- Expected: Access denied  

## Traceability Matrix

| Requirement | Use Case | Test Case |
|------------|---------|----------|
| FR-001 | UC1 | TC001 |
| FR-002 | UC3 | TC002 |
| FR-003 | UC3 | TC003 |
| FR-004 | UC4 | TC004 |
| FR-005 | UC1 | TC005 |
| FR-006 | UC7 | TC006 |
| FR-007 | UC8 | TC007 |
| FR-008 | UC1 | TC008 |