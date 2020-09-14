package com.example.server.controller;


import com.example.server.model.Country;
import com.example.server.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/countries")
public class CountryController {
    @Autowired
    CountryService countryService;


    @GetMapping
    public Iterable<Country> listAllCountries(){
        return countryService.listCountries();
    }

    @PostMapping
    public Country createCountry(@RequestBody Country country){
        return countryService.createCountry(country);
    }

    @GetMapping("/{id}")
    public Country getCountryById(@PathVariable Long id){
        return countryService.getCountryById(id);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteCountry(@PathVariable Long id) {
        return countryService.deleteCountryById(id);
    }
}
