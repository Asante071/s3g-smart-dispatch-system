from fastapi.testclient import TestClient
from api.app import app

client = TestClient(app)


def test_get_tickets():
    response = client.get("/api/tickets")
    assert response.status_code == 200


def test_get_ticket():
    response = client.get("/api/tickets/1")
    assert response.status_code == 200

def test_create_ticket():
    response = client.post(
        "/api/tickets",
        json={
            "id": 1,
            "title": "Network issue",
            "priority": "HIGH"
        }
    )
    assert response.status_code == 200