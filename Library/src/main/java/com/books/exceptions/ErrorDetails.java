package com.books.exceptions;
import java.time.LocalDateTime;

public class ErrorDetails {
	private String message;
	private String detils;
	private LocalDateTime time;
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getDetils() {
		return detils;
	}
	public void setDetils(String detils) {
		this.detils = detils;
	}
	public LocalDateTime getTime() {
		return time;
	}
	public void setTime(LocalDateTime time) {
		this.time = time;
	}
	public ErrorDetails(LocalDateTime localDateTime, String detils, String string) {
		super();
		this.message = string;
		this.detils = detils;
		this.time = localDateTime;
	}
	
}
