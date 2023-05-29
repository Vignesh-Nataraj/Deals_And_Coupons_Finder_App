package com.example.routingandfilteringgateway.controller;


import com.example.routingandfilteringgateway.model.JWTRequest;
import com.example.routingandfilteringgateway.model.JWTRespone;
import com.example.routingandfilteringgateway.service.userservice;
import com.example.routingandfilteringgateway.utility.JWTUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/gateway")
public class controller {

    @Autowired
    private JWTUtility jwtUtility;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private userservice userservice;



    @PostMapping("/authenticate")
    public JWTRespone authenticate(@RequestBody JWTRequest jwtRequest) throws Exception{

        System.out.println("-----------------------done --------------");

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            jwtRequest.getUsername(),
                            jwtRequest.getPassword())

            );
        } catch (BadCredentialsException e){throw  new Exception("INVALID CREDENTIALS", e);}

        final UserDetails userDetails = userservice.loadUserByUsername(jwtRequest.getUsername());

        final String token =
                jwtUtility.generateToken(userDetails);

        return  new JWTRespone(token);
    }
}
