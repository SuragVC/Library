package com.books.exceptions;

public class BooksNotFoundException extends Exception{
	public BooksNotFoundException(String message) {
		super(message);
	}
	public BooksNotFoundException() {
		super();
	}
}
