from sqlalchemy import Column, Integer, String, ForeignKey, Table, Date, Boolean
from sqlalchemy.orm import relationship, backref

from app.common.db import Base


lang_author_table = Table('lang_author_table', Base.metadata,
    Column('lang_id', Integer, ForeignKey('lang.id')),
    Column('author_id', Integer, ForeignKey('author.id'))
)

author_book_table = Table('author_book_table', Base.metadata,
    Column('book_id', Integer, ForeignKey('book.id')),
    Column('author_id', Integer, ForeignKey('author.id'))
)

class Lang(Base):
    __tablename__ = 'lang'

    id = Column(Integer, primary_key=True)
    name = Column(String(200), nullable=False)

    def __init__(self, *args, **kwargs):
        super(Lang, self).__init__(*args, **kwargs)

class Author(Base):
    __tablename__ = 'author'

    id = Column(Integer, primary_key=True)
    name = Column(String(200), nullable=False)
    birthday = Column(Date)
    langs = relationship('Lang', secondary=lang_author_table, backref='lang')
    
    def __init__(self, *args, **kwargs):
        super(Author, self).__init__(*args, **kwargs)

class Book(Base):
    __tablename__ = 'book'

    id = Column(Integer, primary_key=True)
    name = Column(String(200), nullable=False)
    writedate = Column(Date)
    authors = relationship('Author', secondary=author_book_table, backref='author')

    def __init__(self, *args, **kwargs):
        super(Book, self).__init__(*args, **kwargs)

class FinishedBooks(Base):
    __tablename__ = 'finishedbooks'
    id = Column(Integer, primary_key=True)
    book_id = Column(Integer, ForeignKey('book.id'), ondelete='CASCADE', onupdate='CASCADE', nullable=False)
    book = relationship('Book', backref='book')

    def __init__(self, *args, **kwargs):
        super(FinishedBooks, self).__init__(*args, **kwargs)


class BooksInPlan(Base):
    __tablename__ = 'booksinplan'
    id = Column(Integer, primary_key=True)
    book_id = Column(Integer, ForeignKey('book.id'), ondelete='CASCADE', onupdate='CASCADE', nullable=False)
    book = relationship('Book', backref='book')

    def __init__(self, *args, **kwargs):
        super(BooksInPlan, self).__init__(*args, **kwargs)