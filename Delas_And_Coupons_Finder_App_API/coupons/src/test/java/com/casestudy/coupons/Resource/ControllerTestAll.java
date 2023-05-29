package com.casestudy.coupons.Resource;

import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;
import com.casestudy.coupons.Models.Coupons;
import com.casestudy.coupons.Repository.CouponRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;
@ExtendWith(MockitoExtension.class)
@SpringBootTest

class ControllerTestAll {
    @MockBean
    private CouponRepository couponsRepository;

    @Autowired
    private Controller controller;

    @Test
    void getAllCoupons() {
        when(couponsRepository.findAll()).thenReturn(
                Stream.of(
                                new Coupons("id", "provider", "category", "category", "test"))
                        .collect(Collectors.toList()));
        assertEquals(1, controller.getAllCoupons().size());
    }


    @Test
    void addCoupon() {
        Coupons coupon = new Coupons("id", "provider", "category", "category", "test");
        when(couponsRepository.save(coupon)).thenReturn(coupon);
        assertEquals(coupon, controller.addCoupon(coupon));
    }

    @Test
    public void deleteCoupon() {

        String couponId = "1";

        Coupons coupon = new Coupons("id", "provider", "category", "category", "test");
        couponsRepository.deleteById(couponId);
        verify(couponsRepository).deleteById(couponId);


    }


}