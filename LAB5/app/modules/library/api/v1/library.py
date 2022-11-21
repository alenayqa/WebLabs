from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import select, insert

from app.modules.library.models import Word, Lang, Translation
from app.modules.library.models.table_models import Author, Language, Book, author_language, author_book
from datetime import date
from app.common.db import get_db

from typing import Optional

from fastapi import Form


router = APIRouter()


@router.get("/")
def read_root(session: Session = Depends(get_db)):
    try:
        return [
            {
                "name": x.name,
                "translations": [y.name for y in x.translations]
            } for x in session.query(Word).join(Translation).filter(Word.id == Translation.word_id).all()
        ]
    except:
        return {"status": "no data to return"}


@router.post("/items/{word}/{translation}")
def read_item(word: str, translation: str, session: Session = Depends(get_db)):
    lang = session.query(Lang).first()
    if not lang:
        lang = Lang(name="english", abbr="EN")
        session.add(lang)
        session.commit()

    new_word = Word(name=word, lang_id=lang.id)
    session.add(new_word)
    session.commit()

    new_translation = Translation(name=translation, word=new_word)
    session.add(new_translation)
    session.commit()

    return {"status": "success"}

# Добавление новой книги
@router.post('/authors/add')
def add_author(name: str, birthdate: date, biography: str, langs: str, session: Session = Depends(get_db)):
    new_author = Author(name=name, birthdate=birthdate, biography=biography)
    session.add(new_author)
    session.commit()
    lang_list = langs.split(' ')
    for lname in lang_list:
        l = session.query(Language).filter(Language.name == lname).first()
        # Если языка ещё нет в БД, то добавляем его
        if not l:
            l = Language(name=lname)
            session.add(l)
            session.commit()

        session.execute(insert(author_language).values(author_id=new_author.id, language_id=l.id))
    session.commit()
    return {"status": "success"}

@router.post('/books/add')
def add_book(name: str, writedate: int, authors: str, lang: str, session: Session = Depends(get_db)):
    # Изначально книга считается непрочитанной
    new_book = Book(name=name, writedate=writedate, is_finished=False)
    l = session.query(Language).filter(Language.name == lang).first()
    session.add(new_book)
    session.commit()

    # Если языка ещё нет в БД, то добавляем его
    if not l:
        l = Language(name=lang)
        session.add(l)
        session.commit()

    new_book.language_id = l.id

    authors_list = authors.split(' ')
    for aname in authors_list:
        a = session.query(Author).filter(Author.name == aname).first()
        if not a:
            continue
        session.execute(insert(author_book).values(author_id=a.id, book_id=new_book.id))
    session.commit()
    return {"status": "success"}

@router.delete('/authors/delete')
def delete_author(author_id: int, session: Session = Depends(get_db)):
    removed_author = session.query(Author).filter(Author.id==author_id).first()

    # Если удаляемого автора нет
    if not removed_author:
        return {"status": "error - the author doesn't exist"}
    session.delete(removed_author)
    session.commit()
    return {"status": f"success - {removed_author.name} was removed"}

@router.delete('/books/delete')
def delete_book(book_id: int, session: Session = Depends(get_db)):
    removed_book = session.query(Book).filter(Book.id==book_id).first()

    # Если удаляемой книги нет
    if not removed_book:
        return {"status": "error - the book doesn't exist"}
    session.delete(removed_book)
    session.commit()
    return {"status": f"success - {removed_book.name} was removed"}

# Меняет статус книги - из запланированной в прочитанную и наоборот
@router.post('/books/edit/status')
def change_book_status(book_id: int, session: Session = Depends(get_db)):
    changed_book = session.query(Book).filter(Book.id==book_id).first()
    # Если изменяемой книги нет
    if not changed_book:
        return {"status": "error - the book doesn't exist"}
    changed_book.is_finished = not changed_book.is_finished
    session.commit()
    return {"status": "success"}

@router.post('/books/edit/data')
def edit_book(book_id: int, name: Optional[str] = Form(None), writedate: Optional[int] = Form(None), session: Session = Depends(get_db)):
    changed_book = session.query(Book).filter(Book.id==book_id).first()
    # Если изменяемой книги нет
    if not changed_book:
        return {"status": "error - the book doesn't exist"}
    if name is not None:
        changed_book.name = name
    if writedate is not None:
        changed_book.writedate = writedate
    session.commit()
    return {"status": "success"}

@router.post('/authors/edit/data')
def edit_author(author_id: int, name: Optional[str] = Form(None), birthdate: Optional[date] = Form(None), session: Session = Depends(get_db)):
    changed_author = session.query(Author).filter(Author.id==author_id).first()
    # Если изменяемого автора нет
    if not changed_author:
        return {"status": "error - the author doesn't exist"}
    if name is not None:
        changed_author.name = name
    if birthdate is not None:
        changed_author.birthdate = birthdate
    session.commit()
    return {"status": "success"}
