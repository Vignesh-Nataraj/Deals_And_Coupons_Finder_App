package com.casestudy.userDetails.repository;

import com.casestudy.userDetails.model.BasicUserDetails;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BasicUserDetailsRepository extends MongoRepository<BasicUserDetails,String> {
}
