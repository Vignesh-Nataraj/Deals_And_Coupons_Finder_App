package com.casestudy.coupons.Repository;

import com.casestudy.coupons.Models.Coupons;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CouponRepository extends MongoRepository<Coupons, String> {



}
