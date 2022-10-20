package com.books.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer Book_Id;
	@NotBlank
	@NotNull
	@Size(min=4,max=20,message = "Name length mustbe between 4 to 20")
	private String name;
	@NotBlank
	@NotNull
	@Size(min=4,max=20,message = "Author length mustbe between 4 to 20")
	private String author;
	@NotBlank
	@NotNull
	@Size(min=4,max=45,message = "Publication length mustbe between 4 to 45")
	private String publication;
	@NotBlank
	@NotNull
	@Size(min=4,max=45,message = "Category length mustbe between 4 to 45")
	private String category;
	@NotNull
	private Integer pages;
	@NotNull
	private Integer price;
	public Integer getBook_Id() {
		return Book_Id;
	}
	public void setBook_Id(Integer book_Id) {
		Book_Id = book_Id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getPublication() {
		return publication;
	}
	public void setPublication(String publication) {
		this.publication = publication;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public Integer getPages() {
		return pages;
	}
	public void setPages(Integer pages) {
		this.pages = pages;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	public Book(Integer book_Id,
			@NotBlank @NotNull @Size(min = 4, max = 20, message = "Name length mustbe between 4 to 20") String name,
			@NotBlank @NotNull @Size(min = 4, max = 20, message = "Author length mustbe between 4 to 20") String author,
			@NotBlank @NotNull @Size(min = 4, max = 45, message = "Publication length mustbe between 4 to 45") String publication,
			@NotBlank @NotNull @Size(min = 4, max = 45, message = "Category length mustbe between 4 to 45") String category,
			@NotNull Integer pages, @NotNull Integer price) {
		super();
		Book_Id = book_Id;
		this.name = name;
		this.author = author;
		this.publication = publication;
		this.category = category;
		this.pages = pages;
		this.price = price;
	}
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
