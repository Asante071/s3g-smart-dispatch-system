# S³G Smart Dispatch System

## Overview
The S³G Smart Dispatch System is an AI-driven IT service monitoring platform designed to predict Service Level Agreement (SLA) breach risks and recommend the best field service engineer for resolving incidents.

The system analyses incident ticket data, monitors SLA countdowns and visualizes operational insights through a real-time dashboard.

## Project Documents

- [System Specification](SPECIFICATION.md)
- [System Architecture](ARCHITECTURE.md)

## Proposed Technologies

Frontend
- HTML
- CSS
- JavaScript
- Chart.js

Backend
- Python (Flask)

Data
- JSON ticket simulation

## Assignment 8 – System Behavior Modeling

This section includes UML-based modeling of system behavior using state transition diagrams and activity workflows.

### State Diagrams
- [View State Diagrams](STATE_DIAGRAMS.md)

### Activity Diagrams
- [View Activity Diagrams](ACTIVITY_DIAGRAMS.md)

 ## Assignment 9 - Domain modeling and Class Diagram
 - [Domain model](DOMAIN_MODEL.md)
 - [Class Diagram](CLASS_DIAGRAM.md)

 ## Assignment 10 – Implementation
 
Language: Python
 
Contents:
- /src → Class implementations
- /creational_patterns → Design patterns
- /tests → Unit tests
 
Design Choices:
- Singleton used for database
- Builder used for flexible object creation
- Factory used for object instantiation

## Assignment 11 – Repository Layer

This assignment implements a persistence repository layer using the Repository Pattern.

### Features
- Generic CRUD repository interface
- In-memory repository implementation
- Repository Factory for abstraction
- Future-ready database repository stub
- Unit tests for CRUD operations

### Testing
All repository tests were successfully executed using pytest.

### Design Decisions
- Factory Pattern used for storage abstraction
- Repository Pattern separates persistence from business logic
- In-memory storage used for fast testing and flexibility

## Assignment 12 – Service Layer & REST API

### Features
- Service layer implementation
- REST API using FastAPI
- Swagger/OpenAPI documentation
- Ticket API endpoints
- Unit and API tests

### Endpoints

GET /api/tickets

GET /api/tickets/{ticket_id}

POST /api/tickets

### Testing

All tests executed successfully:

7 passed