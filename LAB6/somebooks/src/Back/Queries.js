import axios from "axios";

export default class ApiQueries{
    static async getAllAuthors(){
        const response = await axios.get('http://127.0.0.1:5000/api/v1/library/authors/all')
        return response
    }

    static async deleteAuthor(id){
        const response = await axios.delete('http://127.0.0.1:5000/api/v1/library/authors/delete', 
        {params: {author_id : id}})
        return response
    }

    static async editAuthor(id, name, biography){
        const response = await axios.post('http://127.0.0.1:5000/api/v1/library/authors/edit/data', null,
        {params: {author_id : id, name : name, biography : biography}})
        return response
    }

    static async addAuthor(name, birthdate, biography, langs){
        const response = await axios.post('http://127.0.0.1:5000/api/v1/library/authors/add', null,
        {params: {name : name, birthdate: birthdate, biography : biography, langs : langs}})
        return response
    }


    static async getPlanbooks(){
        const response = await axios.get('http://127.0.0.1:5000/api/v1/library/books/search/plan')
        return response
    }

    static async getFinishedbooks(){
        const response = await axios.get('http://127.0.0.1:5000/api/v1/library/books/search/finished')
        return response
    }

    static async deleteBook(id){
        const response = await axios.delete('http://127.0.0.1:5000/api/v1/library/books/delete', 
        {params: {book_id : id}})
        return response
    }

    static async editBook(id, name, writedate){
        const response = await axios.post('http://127.0.0.1:5000/api/v1/library/books/edit/data', null,
        {params: {book_id : id, name : name, writedate : writedate}})
        return response
    }

    static async changeStatus(id){
        const response = await axios.post('http://127.0.0.1:5000/api/v1/library/books/edit/status', null,
        {params: {book_id : id}})
        return response
    }

    static async addBook(name, writedate, authors, lang){
        console.log(name, writedate, authors, lang)
        const response = await axios.post('http://127.0.0.1:5000/api/v1/library/books/add', null,
        {params: {name : name, writedate: writedate, authors : authors, lang : lang}})
        return response
    }
}