package com.casestudy.deals.Repository;

import com.casestudy.deals.Models.Deals;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface DealsRepository extends MongoRepository<Deals,String>{

}
