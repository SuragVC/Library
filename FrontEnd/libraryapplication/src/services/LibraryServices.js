import axios  from 'axios';
const Get_All_BookAPI='http://localhost:8080/bookservice/books';

class Library{
    getAllbooks(){
        return axios.get(Get_All_BookAPI);
    }
}
export default new Library();