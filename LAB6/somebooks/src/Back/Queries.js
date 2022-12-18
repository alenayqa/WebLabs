import axios from "axios";

export default class ApiQueries{
    static async getAllAuthors(){
        const response = await axios.get('http://127.0.0.1:5000/api/v1/library/authors/all')
        return response
    }
}