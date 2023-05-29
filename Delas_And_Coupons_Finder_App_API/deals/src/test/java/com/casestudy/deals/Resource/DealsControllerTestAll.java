package com.casestudy.deals.Resource;

import com.casestudy.deals.Models.Deals;
import com.casestudy.deals.Repository.DealsRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import static org.junit.jupiter.api.Assertions.*;




@SpringBootTest
class DealsControllerTestAll {

    @MockBean
    private DealsRepository dealsRepository;

    @Autowired
    private Controller controller;

    @Test
    void getAllDeals() {
        when(dealsRepository.findAll()).thenReturn(
                Stream.of(
                                new Deals("","test","test","test","www.amazon.in"))
                        .collect(Collectors.toList()));
        assertEquals(1,controller.getAllDeals().size());
    }

    @Test
    void addDeals() {
        Deals deal = new Deals("","test","test","test","www.amazon.in");
        when(dealsRepository.save(deal)).thenReturn(deal);
        assertEquals(deal,controller.addDeals(deal));
    }



    @Test
    void deleteDeals() {
        String dealId = "1";

        Deals deal = new Deals("1","test","test","test","www.amazon.in");
        dealsRepository.deleteById(dealId);
        verify(dealsRepository).deleteById(dealId);
    }
}