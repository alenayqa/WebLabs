from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship, backref

from app.common.db import Base


class Translation(Base):
    __tablename__ = 'translation'

    id = Column(Integer, primary_key=True)
    name = Column(String(200), nullable=False)

    word_id = Column(Integer, ForeignKey("word.id", ondelete="CASCADE"), primary_key=True)
    word = relationship("Word", backref=backref("translations", order_by="Translation.name", cascade="all, delete"),
                       lazy="joined")

    def __init__(self, *args, **kwargs):
        super(Translation, self).__init__(*args, **kwargs)
