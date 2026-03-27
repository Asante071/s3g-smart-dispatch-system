# Use Case Specifications

## UC1: View Dashboard
Actor: IT Service Manager  
Description: Displays real-time ticket and SLA data  

Preconditions:
- User is authenticated  

Postconditions:
- Dashboard with updated data is displayed  

Basic Flow:
1. User logs into system  
2. System retrieves ticket data  
3. System displays dashboard  

Alternative Flow:
- If system fails → display error message  

---

## UC2: Log Ticket
Actor: Service Desk Agent  
Description: Capture new incident ticket  

Preconditions:
- System operational  

Postconditions:
- Ticket stored in system  

Basic Flow:
1. Agent enters ticket details  
2. System validates input  
3. Ticket is created  

Alternative:
- Invalid input → error message  

---

## UC3: Calculate SLA
Actor: System  
Description: Computes SLA remaining time  

Preconditions:
- Ticket exists  

Postconditions:
- SLA value updated  

---

## UC4: Recommend Engineer
Actor: System  
Description: Suggest optimal engineer  

Preconditions:
- SLA calculated  

Postconditions:
- Engineer assigned  

---

## UC5: View Assigned Tasks
Actor: Engineer  
Description: View assigned tickets  

---

## UC6: Update Ticket
Actor: Engineer  
Description: Update ticket status  

---

## UC7: Generate Report
Actor: IT Service Manager  
Description: Produce SLA performance report  

---

## UC8: Simulate Crisis
Actor: IT Service Manager  
Description: Trigger high-risk scenario  

Preconditions:
- System running  

Postconditions:
- Ticket risks increase  