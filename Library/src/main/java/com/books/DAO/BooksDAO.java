package com.books.DAO;

import org.springframework.data.domain.Pageable;

import org.springframework.data.domain.Page;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.books.model.Book;

public interface BooksDAO extends PagingAndSortingRepository<Book, Integer>{

	Page<Book>findAll(Pageable pageable);

}
