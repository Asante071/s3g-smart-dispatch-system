![CI](https://github.com/Asante071/s3g-smart-dispatch-system/actions/workflows/ci.yml/badge.svg)

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

![Python](https://img.shields.io/badge/Python-3.14-blue)

![FastAPI](https://img.shields.io/badge/FastAPI-Framework-green)

![Tests](https://img.shields.io/badge/Tests-Pytest-success)

# S³G Smart Dispatch System

## Intelligent IT Service Management Platform

The S³G Smart Dispatch System is an intelligent IT Service Management (ITSM) platform designed to improve incident management, SLA monitoring, and engineer dispatching within enterprise support environments.

The platform centralizes ticket management processes while providing a foundation for automated dispatching, SLA tracking, workflow management, and operational analytics.

## Key Features

- Ticket Management
- SLA Monitoring and Tracking
- Intelligent Dispatch Workflows
- REST API Development using FastAPI
- Automated Testing with Pytest
- Continuous Integration using GitHub Actions
- Open Source Collaboration Support
- Agile Development Workflow

## Project Status

**Version:** v1.0.0

**Status:** Active Development

### Current Capabilities

- Ticket CRUD Operations
- Repository Pattern Implementation
- Service Layer Architecture
- FastAPI REST Endpoints
- Automated Unit Testing
- CI/CD Pipeline Automation
- GitHub Collaboration Workflow


## Technology Stack

### Frontend
- HTML
- CSS
- JavaScript
- Chart.js

### Backend
- Python
- FastAPI

### Testing
- Pytest

### DevOps
- GitHub Actions

### Version Control
- Git & GitHub

### Documentation
- Markdown

### Data
- JSON ticket simulation

## System Design Documentation

- [System Specification](docs/SPECIFICATION.md)
- [System Architecture](docs/ARCHITECTURE.md)
- [Domain Model](docs/DOMAIN_MODEL.md)
- [Class Diagram](docs/CLASS_DIAGRAM.md)
- [State Diagrams](docs/STATE_DIAGRAMS.md)
- [Activity Diagrams](docs/ACTIVITY_DIAGRAMS.md)


 ## Implementation
 
Language: Python
 
Contents:
- /src → Class implementations
- /creational_patterns → Design patterns
- /tests → Unit tests
 
Design Choices:
- Singleton used for database
- Builder used for flexible object creation
- Factory used for object instantiation

## Repository Layer

The system implements a persistence layer using the Repository Pattern to separate business logic from data access concerns.

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

## Service Layer & REST API

### API Endpoints

| Method | Endpoint | Description |
|----------|----------|----------|
| GET | /api/tickets | Retrieve all tickets |
| GET | /api/tickets/{id} | Retrieve a specific ticket |
| POST | /api/tickets | Create a new ticket |

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

## Running the Project

### Clone Repository

```bash
git clone https://github.com/Asante071/s3g-smart-dispatch-system.git
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run Tests

```bash
pytest
```

### Start API

```bash
uvicorn api.app:app --reload
```

# Features for Contribution

| Feature Area | Description | Difficulty |
|---|---|---|
| API Enhancements | Add additional FastAPI endpoints | Medium |
| SLA Monitoring | Improve SLA tracking and escalation | Medium |
| Testing | Expand pytest coverage | Easy |
| Documentation | Improve onboarding and setup docs | Easy |
| Dashboard Analytics | Add SLA charts and metrics | Hard |
| Notification System | Integrate email or Teams alerts | Medium |
| Smart Dispatch Logic | Improve intelligent ticket assignment | Hard |

## Project Structure

```text
api/                 FastAPI endpoints
services/            Business logic layer
repositories/        Repository pattern implementation
src/                 Core domain models
tests/               Automated testing
docs/                UML diagrams and specifications
.github/workflows/   CI/CD automation
Screenshots/         Project evidence and screenshots
```

## Contributing

Contributions are welcome.

Please review:

- CONTRIBUTING.md
- ROADMAP.md
- SECURITY.md

before submitting pull requests.

---

## License

This project is licensed under the MIT License.

See LICENSE for details.