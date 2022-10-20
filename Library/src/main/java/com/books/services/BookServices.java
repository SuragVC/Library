package com.books.services;
import java.util.List;
import com.books.exceptions.BooksNotFoundException;
import com.books.model.Book;


public interface BookServices {
	public List<Book>getAllBooks()throws BooksNotFoundException;
	public Book getByBookId(Integer Book_Id)throws BooksNotFoundException;
	public Book createBook(Book book);
	public Book deleteBookById(Integer Book_Id)throws BooksNotFoundException;
	public Book updateBook(Book book)throws BooksNotFoundException;
}
