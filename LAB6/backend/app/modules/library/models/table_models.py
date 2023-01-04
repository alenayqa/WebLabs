from sqlalchemy import Column, Integer, String, Date, Text, Table, ForeignKey, Boolean
from sqlalchemy.orm import relationship, backref

from app.common.db import Base

author_language = Table('author_language', Base.metadata,
    Column('author_id', Integer, ForeignKey('author.id', ondelete='CASCADE')),
    Column('language_id', Integer, ForeignKey('language.id', ondelete='CASCADE'))
)

author_book = Table('author_book', Base.metadata,
    Column('author_id', Integer, ForeignKey('author.id', ondelete='CASCADE')),
    Column('book_id', Integer, ForeignKey('book.id', ondelete='CASCADE'))
)

class Language(Base):
    __tablename__ = 'language'

    id = Column(Integer, primary_key=True)
    name = Column(String(200), nullable=False)

    def __init__(self, *args, **kwargs):
        super(Language, self).__init__(*args, **kwargs)


class Author(Base):
    __tablename__ = 'author'

    id = Column(Integer, primary_key=True)
    name = Column(String(200), nullable=False)
    birthdate = Column(Date)
    biography = Column(String(1000))

    # languages = relationship('Language', secondary=author_language, back_populates='authors')
    books = relationship('Book', secondary=author_book, back_populates='authors')


    def __init__(self, *args, **kwargs):
        super(Author, self).__init__(*args, **kwargs)


class Book(Base):
    __tablename__ = 'book'

    id = Column(Integer, primary_key=True)
    name = Column(String(200), nullable=False)
    writedate = Column(Integer)
    is_finished = Column(Boolean, nullable=False)

    authors = relationship('Author', secondary=author_book, back_populates='books')

    language_id = Column(Integer, ForeignKey('language.id'))
    # language = relationship('Language', back_populates='books')

    def __init__(self, *args, **kwargs):
        super(Book, self).__init__(*args, **kwargs)

