from abc import ABC, abstractmethod

class Repository(ABC):

    @abstractmethod
    def save(self, entity):
        pass

    @abstractmethod
    def find_by_id(self, id):
        pass

    @abstractmethod
    def find_all(self):
        pass

    @abstractmethod
    def delete(self, id):
        pass