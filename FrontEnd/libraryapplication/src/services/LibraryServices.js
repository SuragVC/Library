import axios  from 'axios';
const BOOKS_API_BASE_URL='http://localhost:8080/bookservice/books';
class Library{
    getAllBooks(pageNo){
        let PAGINATION_API_URL='http://localhost:8080/bookservice/books/page?pageNo='+pageNo;
        return axios.get(PAGINATION_API_URL);
    }
    createBooks(books){
        return axios.post(BOOKS_API_BASE_URL,books);
    }
    updateBooks(books){
        return axios.put(BOOKS_API_BASE_URL,books);
    }
    getBookByID(book_id){
        return axios.get(BOOKS_API_BASE_URL+"/"+book_id);
    }
}
export default new Library();