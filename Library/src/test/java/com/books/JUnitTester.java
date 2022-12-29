package com.books;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import java.util.Arrays;
import java.util.List;

import org.apache.catalina.core.ApplicationContext;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.integration.IntegrationProperties.RSocket.Client;
import org.springframework.restdocs.RestDocumentationContextProvider;
import org.springframework.test.web.reactive.server.WebTestClient;

import com.books.controller.BooksController;
import com.books.model.Book;
import com.books.services.BookServiceImpl;
@ExtendWith(MockitoExtension.class)
public class JUnitTester {
	@Mock
	private BookServiceImpl services;
	@InjectMocks
	private BooksController controler;
	private AutoCloseable closeable;
	
	 @Autowired
	 private ApplicationContext context;
	
	public Book b1=new Book(1,"James Bond","Bond","ABC Publication","Thriller",100,1200);
	public Book b2=new Book(2,"Harry Potter","Hary","ABCD Publication","Thriller",100,600);
	public Book b3=new Book(3,"Mary Jain","Mary","ABCDE Publication","Clasic",100,700);
    @BeforeEach
    void initService() {
    	System.out.println("New method started...");
        closeable = MockitoAnnotations.openMocks(this);
        controler = new BooksController(controler);
    }

    @AfterEach
    void closeService() throws Exception {
    	System.out.println("Method exicuted...");
        closeable.close();
    }
    //Create book test
    @Test
    public void createABook_success()throws Exception{
		when(services.createBook(any(Book.class))).thenReturn(b3);
		Book resultBook = services.createBook(b3);
		assertEquals(b3, resultBook);
		
	}
    //Get all books 
    @Test
	public void getAllRecords_success()throws Exception{
		List<Book> list = Arrays.asList(new Book[]{b1,b2});
		when(services.getAllBooks()).thenReturn(list);
		
		List<Book> resultList=services.getAllBooks();
		assertEquals(2, resultList.size());
		
	}
	//Get a record by id
	@Test
	public void getARecordById_success()throws Exception{
		when(services.getByBookId(2)).thenReturn(b2);
		
		Book resultBook = services.getByBookId(2);
		assertEquals(b2, resultBook);
	}
	//Delete a book by id
	@Test
	public void deleteABook_sucess()throws Exception{
		when(services.deleteBookById(1)).thenReturn(b1);
		
		Book resultBook = services.deleteBookById(1);
		assertEquals(b1, resultBook);
	}
}
