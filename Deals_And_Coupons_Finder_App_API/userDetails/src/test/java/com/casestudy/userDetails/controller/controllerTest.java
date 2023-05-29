package com.casestudy.userDetails.controller;
import com.casestudy.userDetails.model.BasicUserDetails;
import com.casestudy.userDetails.model.Coupons;
import com.casestudy.userDetails.model.userDetails;
import com.casestudy.userDetails.repository.BasicUserDetailsRepository;
import com.casestudy.userDetails.repository.userDetailsRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


import java.util.Arrays;
import java.util.List;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
class controllerTest {

    @MockBean
    private userDetailsRepository userDetailsRepository;

    @MockBean
    private BasicUserDetailsRepository BasicUserDetailsRepository ;

    @Autowired
    private controller controller;




    @Test
    void getAllUsers() {
        List<userDetails> userDetails = Arrays.asList(
                new userDetails("username","password","email",000,Arrays.asList(""),
                        Arrays.asList(
                                new Coupons("id","provider","code","category","description"),
                                new Coupons("id","provider","code","category","description"))
                ),
                new userDetails("username","password","email",000,Arrays.asList(),
                        Arrays.asList(
                                new Coupons("id","provider","code","category","description"),
                                new Coupons("id","provider","code","category","description"))
                )
                );

        when(userDetailsRepository.findAll()).thenReturn(userDetails);
        assertEquals(2,controller.getAllUsers().size());
    }


    @Test
    void updateUserDetails() {

        userDetails details   =   new userDetails("username","password","email",000,Arrays.asList(""),
                Arrays.asList(
                        new Coupons("id","provider","code","category","description"),
                        new Coupons("id","provider","code","category","description"))
        );

        BasicUserDetails basicUserDetails = new BasicUserDetails("username","mail",00,Arrays.asList(""),
                Arrays.asList(
                        new Coupons("id","provider","code","category","description"),
                        new Coupons("id","provider","code","category","description")));

        when(userDetailsRepository.findById(basicUserDetails.getUsername())).thenReturn(java.util.Optional.of(details));

        when(userDetailsRepository.save(details)).thenReturn(details);

        assertEquals(details,controller.updateUserDetails(basicUserDetails));
    }

    @Test
    void getUserDetail() {

        BasicUserDetails basicUserDetails = new BasicUserDetails("username","mail",00,Arrays.asList(""),
                Arrays.asList(
                        new Coupons("id","provider","code","category","description"),
                        new Coupons("id","provider","code","category","description")));

        when(BasicUserDetailsRepository.findById(basicUserDetails.getUsername())).thenReturn(java.util.Optional.of(basicUserDetails));

        assertEquals((java.util.Optional.of(basicUserDetails)),controller.getUserDetail(basicUserDetails.getUsername()));
    }
}