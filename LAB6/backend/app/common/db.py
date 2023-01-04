import os

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from starlette.requests import Request
from sqlalchemy_utils import database_exists, create_database


def create_db_engine():
    # return create_engine('postgresql://postgres:postgres@localhost/dict_db', echo=True)
    # return create_engine('postgresql://postgres:postgres@postgres/dict_db', echo=True)
    # return create_engine('postgresql://postgres:postgres@localhost/dict_db', echo=True)
    engine = create_engine(os.getenv('DATABASE_URL'), echo=True)
    if not database_exists(engine.url): # Checks for the first time  
         create_database(engine.url)
    return engine


def create_session_factory(engine):
    return sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db(request: Request):
    return request.state.db


Base = declarative_base()