package com.yuvraj.fullstack.repository;

import com.yuvraj.fullstack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
