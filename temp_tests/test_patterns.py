from creational_patterns.singleton import Database

def test_singleton():
    db1 = Database()
    db2 = Database()
    assert db1 is db2