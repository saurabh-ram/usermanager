package com.saurabh.user.manager.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.saurabh.user.manager.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
