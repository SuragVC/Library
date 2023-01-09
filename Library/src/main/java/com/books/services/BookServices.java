package com.books.services;
import org.springframework.data.domain.Page;

import com.books.exceptions.BooksNotFoundException;
import com.books.model.Book;


public interface BookServices {
	public Page<Book>getAllBooks(int page)throws BooksNotFoundException;
	public Book getByBookId(Integer Book_Id)throws BooksNotFoundException;
	public Book createBook(Book book);
	public Book deleteBookById(Integer Book_Id)throws BooksNotFoundException;
	public Book updateBook(Book book)throws BooksNotFoundException;
}
