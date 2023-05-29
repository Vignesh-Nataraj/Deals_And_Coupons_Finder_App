package com.casestudy.userDetails.controller;

import com.casestudy.userDetails.model.BasicUserDetails;
import com.casestudy.userDetails.model.userDetails;
import com.casestudy.userDetails.repository.BasicUserDetailsRepository;
import com.casestudy.userDetails.repository.userDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.List;
import java.util.Optional;

@RestController
@EnableSwagger2

@RequestMapping("/user")
public class controller {

    @Autowired
    private userDetailsRepository userDetailsRepository;

    @Autowired
    private BasicUserDetailsRepository basicUserDetailsRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping(value = "/all")
    public List<userDetails> getAllUsers() {
        return userDetailsRepository.findAll();
    }

    @PostMapping(value = "/add")
    public userDetails addUsers(@RequestBody userDetails user){

        userDetails details = new userDetails(user.getUsername(),
                encode(user.getPassword()),user.getEmail(),user.getCashbackPoints(),
                user.getPreferences(),user.getListOfCoupons());

        System.out.println(user);
        return userDetailsRepository.save(details);
    }

    private String encode(String password) {
        return passwordEncoder.encode(password);
    }


    @PostMapping(value = "/update")
    public userDetails updateUserDetails(@RequestBody BasicUserDetails user) {

        userDetails details = userDetailsRepository.findById(user.getUsername()).orElse(null);

        details.setCashbackPoints(user.getCashbackPoints());
        details.setListOfCoupons(user.getListOfCoupons());

        return userDetailsRepository.save(details);
    }

    @GetMapping(value = "/getuser/{name}")
    public Optional<BasicUserDetails> getUserDetail(@PathVariable String name)
    {
        return basicUserDetailsRepository.findById(name);
    }





}
