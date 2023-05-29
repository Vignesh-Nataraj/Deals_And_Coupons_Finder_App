package com.casestudy.userDetails.repository;

import com.casestudy.userDetails.model.userDetails;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface userDetailsRepository extends MongoRepository<userDetails,String> {


}
