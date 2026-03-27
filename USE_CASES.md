# Use Case Specifications

## UC1: View Dashboard
Actor: IT Service Manager
Precondition: User is logged in
Postcondition: Dashboard is displayed

Basic Flow:
1. User logs in
2. System displays dashboard

Alternative:
- If data fails → show error

---

## UC2: Log Ticket
Actor: Service Desk Agent
Precondition: System active
Postcondition: Ticket created

Basic Flow:
1. Enter issue details
2. Submit ticket

Alternative:
- Missing fields → show validation error

---

## UC3: Calculate SLA
Actor: System
Precondition: Ticket exists
Postcondition: SLA time calculated

---

## UC4: Recommend Engineer
Actor: System
Precondition: SLA calculated
Postcondition: Engineer assigned

---

## UC5: View Assigned Tasks
Actor: Engineer

---

## UC6: Update Ticket
Actor: Engineer

---

## UC7: Generate Report
Actor: Manager

---

## UC8: Simulate Crisis
Actor: Manager