package com.books.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.books.model.Book;

public interface BooksDAO extends JpaRepository<Book, Integer>{

}
