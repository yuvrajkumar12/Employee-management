package com.yuvraj.fullstack.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(long id){
        super("Could not found the user with id "+id);
    }
}
