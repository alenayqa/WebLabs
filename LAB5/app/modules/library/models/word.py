from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from app.common.db import Base


class Word(Base):
    __tablename__ = 'word'

    id = Column(Integer, primary_key=True)
    name = Column(String(200), nullable=False)
    lang_id = Column(Integer, ForeignKey("lang.id", ondelete="CASCADE"))
    lang = relationship("Lang", lazy="selectin")

    def __init__(self, *args, **kwargs):
        super(Word, self).__init__(*args, **kwargs)
