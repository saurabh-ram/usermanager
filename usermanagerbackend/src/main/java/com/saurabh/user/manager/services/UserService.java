package com.saurabh.user.manager.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.saurabh.user.manager.models.User;
import com.saurabh.user.manager.repos.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;

	public List<User> findAllUsers() {
		List<User> users = repository.findAll();
		if (users.size() == 0) {
			throw new DataIntegrityViolationException("Bad Request");
		}
		return users;
	}

	public Object addUser(User user) {
		repository.save(user);
		User savedUser = repository.findById(user.getId()).get();
		if (savedUser == null) {
			throw new DataIntegrityViolationException("Bad Request");
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
	}

	public ResponseEntity<Object> updateUser(Long id, User data) {
		User user = repository.findById(id).get();
		if (user == null) {
			throw new DataIntegrityViolationException("Bad Request");
		}
		user.setName(data.getName());
		user.setEmail(data.getEmail());
		user.setAge(data.getAge());
		repository.save(user);
		return ResponseEntity.of(Optional.of(user));
	}

	public ResponseEntity<Object> deleteUserById(Long id) {
		User user = repository.findById(id).get();
		if (user == null) {
			throw new DataIntegrityViolationException("Bad Request");
		}
		repository.deleteById(id);
		return ResponseEntity.ok(user);
	}

}
