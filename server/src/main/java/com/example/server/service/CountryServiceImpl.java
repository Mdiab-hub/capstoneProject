package com.example.server.service;

import com.example.server.model.Country;
import com.example.server.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@Service
public class CountryServiceImpl implements CountryService{
    @Autowired
    CountryRepository countryRepository;

    @Override
    public Iterable<Country> listCountries() {
        return countryRepository.findAll();
    }

    @Override
    public Country createCountry(Country country) {
        return countryRepository.save(country);
    }

    @Override
    public Country getCountryById(Long id) {
        return countryRepository.findById(id).get();
    }

    @Override
    public HttpStatus deleteCountryById(Long id) {
         countryRepository.deleteById(id);
         return HttpStatus.OK;
    }
}
