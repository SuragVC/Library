package com.books.exceptions;

import java.time.LocalDateTime;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptions {
	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorDetails>Exceptions(Exception exception,WebRequest request){
		ErrorDetails errorDetails = new ErrorDetails(LocalDateTime.now(), exception.getMessage(), request.getDescription(false));
		return new ResponseEntity<ErrorDetails>(errorDetails,HttpStatus.BAD_REQUEST);
	}
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ErrorDetails> MethodException(MethodArgumentNotValidException loginException ){
		ErrorDetails errorDetails = new ErrorDetails(LocalDateTime.now(),"valadiation error",loginException.getBindingResult().getFieldError().getDefaultMessage());
		return new ResponseEntity<ErrorDetails>(errorDetails,HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(BooksNotFoundException.class)
	public ResponseEntity<ErrorDetails>booksNotFoundException(BooksNotFoundException exception,WebRequest request){
		ErrorDetails errorDetails = new ErrorDetails(LocalDateTime.now(), exception.getMessage(), request.getDescription(false));
		return new ResponseEntity<ErrorDetails>(errorDetails,HttpStatus.BAD_REQUEST);
	}
	
}
