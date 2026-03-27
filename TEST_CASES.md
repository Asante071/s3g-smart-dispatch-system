# Test Cases

| Test ID | Requirement | Description | Steps | Expected Result | Status |
|--------|------------|------------|-------|----------------|--------|
| TC001 | FR1 | View dashboard | Open system | Dashboard loads | Pass |
| TC002 | FR2 | SLA calculation | Load tickets | SLA updates | Pass |
| TC003 | FR3 | Risk highlighting | SLA < 0 | Shows red | Pass |
| TC004 | FR4 | Engineer recommendation | Load system | Engineer assigned | Pass |
| TC005 | FR5 | Workload chart | Open dashboard | Chart displays | Pass |
| TC006 | FR6 | Generate report | Click button | Report shown | Pass |
| TC007 | FR7 | Crisis simulation | Click button | Risk increases | Pass |
| TC008 | FR8 | Alerts | SLA <1 | Alert shown | Pass |

## Non-Functional Tests

Performance Test:
- Simulate multiple users
- Expected: Response ≤ 2 seconds

Security Test:
- Unauthorized access attempt
- Expected: Access denied