package com.example.routingandfilteringgateway.repository;

import com.example.routingandfilteringgateway.model.user;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface userDetails extends MongoRepository<user,String> {
}
