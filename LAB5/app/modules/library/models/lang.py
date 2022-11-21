from sqlalchemy import Column, Integer, String

from app.common.db import Base


class Lang(Base):
    __tablename__ = 'lang'

    id = Column(Integer, primary_key=True)
    name = Column(String(200), nullable=False)
    abbr = Column(String(10), nullable=False)

    def __init__(self, *args, **kwargs):
        super(Lang, self).__init__(*args, **kwargs)
