package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name="products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
   private String email;
    private String course;

    public Product() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getemail(){
        return email;}
    public void setemail(String email){
        this.email=email;

    }
    public String getcourse(){
        return course;}
    public void setcourse(String course){
        this.course=course;}
}
