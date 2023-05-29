package com.casestudy.userDetails.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "User")
public class userDetails {

    @Id
    private String username;
    private String password;
    private String email;
    private double cashbackPoints;
    private List<String> preferences;
    private List<Coupons> ListOfCoupons;

    public userDetails() {
    }

    public userDetails(String username, String password, String email, double cashbackPoints, List<String> preferences, List<Coupons> listOfCoupons) {
        this.username = username;
        this.password = password;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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
