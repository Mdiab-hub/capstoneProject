package com.example.server.service;

import com.example.server.model.Country;
import org.springframework.http.HttpStatus;

public interface CountryService {
    Iterable<Country> listCountries();
        Country createCountry(Country country);
        Country getCountryById(Long id);
        HttpStatus deleteCountryById(Long id);
}
