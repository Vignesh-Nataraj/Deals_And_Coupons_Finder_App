package com.casestudy.coupons.Resource;
import com.casestudy.coupons.Models.Coupons;
import com.casestudy.coupons.Repository.CouponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@RequestMapping("/coupons")
public class Controller {

    @Autowired
    private CouponRepository couponRepository;

    @GetMapping(value = "/all")
    public List<Coupons> getAllCoupons(){
        return couponRepository.findAll();
    }

    @GetMapping(value="/edit/{id}")
    public Coupons getCouponbyId(@PathVariable String id){return couponRepository.findById(id).orElse(null);}

    @PostMapping(value = "/add")
    public Coupons addCoupon(@RequestBody Coupons coupons){
        return couponRepository.save(coupons);
    }

    @DeleteMapping(value = "/delete/{couponID}")
    public void deleteProduct(@PathVariable String couponID) {
        System.out.println("Delete method called");
        couponRepository.deleteById(couponID);
    }
}
