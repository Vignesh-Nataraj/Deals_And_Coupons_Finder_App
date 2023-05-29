package com.casestudy.deals.Models;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Deals")
public class Deals {

    @Id
    private String id;
    private String provider;
    private String category;
    private String description;
    private String link;

    public Deals(){

    }

    public Deals (String id,String provider,String category,String description,String link) {
        this.id=id;
        this.provider=provider;
        this.category=category;
        this.description=description;
        this.link=link;
    }

    public String getId(){
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getProvider() {
        return provider;
    }

    public void setProvider(String provider) {
        this.provider = provider;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
