package com.casestudy.userDetails.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "User")
public class BasicUserDetails {

    @Id
    private String username;
    private String email;
    private double cashbackPoints;
    private List<String> preferences;
    private List<Coupons> ListOfCoupons;

    public BasicUserDetails() {
    }

    public BasicUserDetails(String username, String email, double cashbackPoints, List<String> preferences, List<Coupons> listOfCoupons) {
        this.username = username;
        this.email = email;
        this.cashbackPoints = cashbackPoints;
        this.preferences = preferences;
        ListOfCoupons = listOfCoupons;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public double getCashbackPoints() {
        return cashbackPoints;
    }

    public void setCashbackPoints(double cashbackPoints) {
        this.cashbackPoints = cashbackPoints;
    }

    public List<String> getPreferences() {
        return preferences;
    }

    public void setPreferences(List<String> preferences) {
        this.preferences = preferences;
    }

    public List<Coupons> getListOfCoupons() {
        return ListOfCoupons;
    }

    public void setListOfCoupons(List<Coupons> listOfCoupons) {
        ListOfCoupons = listOfCoupons;
    }
}
