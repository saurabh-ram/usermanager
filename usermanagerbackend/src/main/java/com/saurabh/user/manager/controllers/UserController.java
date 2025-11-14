package com.saurabh.user.manager.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.saurabh.user.manager.models.User;
import com.saurabh.user.manager.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService service;

	@GetMapping("/get")
	public List<User> getAllUsers() {
		return service.findAllUsers();
	}

	@PostMapping("/add")
	public Object createUser(@RequestBody User user) {
		return service.addUser(user);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> updateProduct(@PathVariable Long id, @RequestBody User user) {
		return service.updateUser(id, user);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteProductById(@PathVariable Long id) {
		return service.deleteUserById(id);
	}

	@ExceptionHandler(Exception.class)
	protected ResponseEntity<?> handleException(Exception exception) {
		return ResponseEntity.badRequest().body(exception.getMessage());
	}

}
