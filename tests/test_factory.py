from app import create_app


def test_config():
    """Test create_app without passing test config."""
    assert not create_app().testing
    assert create_app({"TESTING": True}).testing


def test_index(client):
    response = client.get("/")
    assert response.status_code == 200
    assert "Hello, World" in response.data.decode("utf-8")


def test_hello(client):
    response = client.get("/test")
    assert response.status_code == 200
    assert "Hello, World test!" in response.data.decode("utf-8")
