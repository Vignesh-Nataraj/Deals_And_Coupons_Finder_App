package com.casestudy.deals.Resource;

import com.casestudy.deals.Models.Deals;
import com.casestudy.deals.Repository.DealsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/deals")

public class Controller {

    @Autowired
    private DealsRepository dealsRepository;

    @GetMapping(value = "/all")
    public List<Deals> getAllDeals() {
        return dealsRepository.findAll();
    }

    @PostMapping (value = "/add")
    public Deals addDeals(@RequestBody Deals deals){
        return dealsRepository.save(deals);
    }

    @DeleteMapping (value="/delete/{dealId}")
    public void deleteDeals(@PathVariable String dealId) {
        System.out.println("Delete Method Called");
        dealsRepository.deleteById(dealId);
    }
}
