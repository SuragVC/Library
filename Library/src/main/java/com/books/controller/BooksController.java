package com.books.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.books.exceptions.BooksNotFoundException;
import com.books.model.Book;
import com.books.services.BookServices;

import lombok.Data;
@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/bookservice")
@Data
public class BooksController {
	@Autowired
	private BookServices bookService;
	

	@PostMapping("/books")
	public ResponseEntity<Book>createBook(@RequestBody @Valid Book book){
		Book savedBook = bookService.createBook(book);
		return new ResponseEntity<Book>(savedBook,HttpStatus.CREATED);
	}
	
	@GetMapping("/books")
	public ResponseEntity<List<Book>>getAllBooks() throws BooksNotFoundException{
		List<Book> list = bookService.getAllBooks();
		return new ResponseEntity<List<Book>>(list,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/books/{Books_Id}")
	public ResponseEntity<Book>getBookById(@PathVariable Integer Books_Id) throws BooksNotFoundException{
		Book book = bookService.getByBookId(Books_Id);
		return new ResponseEntity<Book>(book,HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/books/{Books_Id}")
	public ResponseEntity<Book>deleteBookById(@PathVariable Integer Books_Id) throws BooksNotFoundException{
		Book book = bookService.deleteBookById(Books_Id);
		return new ResponseEntity<Book>(book,HttpStatus.GONE);
	}
	
	@PutMapping("/books")
	public ResponseEntity<Book>updateBook(@RequestBody @Valid Book book) throws BooksNotFoundException{
		Book savedBook = bookService.updateBook(book);
		return new ResponseEntity<Book>(savedBook,HttpStatus.ACCEPTED);
	}
}
