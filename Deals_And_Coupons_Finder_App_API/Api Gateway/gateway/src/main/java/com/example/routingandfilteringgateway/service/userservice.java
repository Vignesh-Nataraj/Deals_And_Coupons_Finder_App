package com.example.routingandfilteringgateway.service;

import com.example.routingandfilteringgateway.model.user;
import com.example.routingandfilteringgateway.repository.userDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class userservice implements UserDetailsService {

    @Autowired
    userDetails details;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<user> user = details.findById(username);

        if(user == null) {throw new UsernameNotFoundException("User not found");}

        List<SimpleGrantedAuthority> authorities = Arrays.asList(new SimpleGrantedAuthority("admin"));

        return new User(user.get().getUsername(), user.get().getPassword(), authorities);

    }
}
