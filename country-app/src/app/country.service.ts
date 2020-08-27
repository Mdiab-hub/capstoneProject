import { Injectable } from '@angular/core';
 
import { Country } from './country';
import { COUNTRIES } from './country-data';
 
@Injectable()
export class CountryService {
    countryUrl: '';
 
  constructor() { }
 
  getCountries(): Country[] {
    return COUNTRIES;
  }
 
  getPopulatedCountries(): Country[] {
    return COUNTRIES.sort((a, b) => b.population - a.population).slice(0, 3);//sorts countries (in what order) subtracts the biggest from smallest pull the first three
  }
 
  getLargestCountries(): Country[] {
    return COUNTRIES.sort((a, b) => b.area - a.area).slice(0, 3);
  }
 
  getGDPCountries(): Country[] {
    return COUNTRIES.sort((a, b) => b.gdp - a.gdp).slice(0, 3);
  }
 
  getCountry(name: string): Country {
    return COUNTRIES.find(country => country.name === name);//.find returns the first element of array
  }
}