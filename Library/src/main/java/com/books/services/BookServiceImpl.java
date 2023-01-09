package com.books.services;

import org.springframework.data.domain.Pageable;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.books.DAO.BooksDAO;
import com.books.exceptions.BooksNotFoundException;
import com.books.model.Book;

@Service
public class BookServiceImpl implements BookServices{
	@Autowired
	private BooksDAO booksDao;
	
	public BookServiceImpl() {
		// TODO Auto-generated constructor stub
	}

	public BookServiceImpl(BookServiceImpl controler) {
		// TODO Auto-generated constructor stub
	}

	@Override
	public Page<Book> getAllBooks(int pageNo) throws BooksNotFoundException {
		Pageable pageable = PageRequest.of(pageNo,10);
		Page<Book> page = booksDao.findAll(pageable);
		if(page.isEmpty()) {
			throw new BooksNotFoundException("No Books Added to the library");
		}else {
			return page;
		}
	}

	@Override
	public Book getByBookId(Integer Book_Id) throws BooksNotFoundException {
		Optional<Book> optBook = booksDao.findById(Book_Id);
		if(optBook.isPresent()) {
			return optBook.get();
		}else {
			throw new BooksNotFoundException("Book not found with id "+Book_Id);
		}
	}

	@Override
	public Book createBook(Book book) {
		Book savedBook = booksDao.save(book);
		return savedBook;
	}

	@Override
	public Book deleteBookById(Integer Book_Id) throws BooksNotFoundException {
		Optional<Book> optBook = booksDao.findById(Book_Id);
		if(optBook.isPresent()) {
			Book book = optBook.get();
			booksDao.delete(book);
			return book;
			
		}else {
			throw new BooksNotFoundException("Book not found with id "+Book_Id);
		}
		
	}

	@Override
	public Book updateBook(Book book) throws BooksNotFoundException {
		Optional<Book> optBook = booksDao.findById(book.getBook_Id());
		if(optBook.isPresent()) {
			Book savedbook = optBook.get();
			savedbook.setName(book.getName());
			savedbook.setAuthor(book.getAuthor());
			savedbook.setPages(book.getPages());
			savedbook.setPrice(book.getPrice());
			savedbook.setPublication(book.getPublication());
			savedbook.setUrl_link(book.getUrl_link());
			booksDao.save(savedbook);
			return savedbook;
			
		}else {
			throw new BooksNotFoundException("Book not found with id "+book.getBook_Id());
		}
	}

}
