import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Country } from './country';
import { Observable } from 'rxjs';
@Injectable()
export class CountryService {
  private countryUrl = 'http://localhost:8080/countries'
  constructor(private http: HttpClient) { }
  getCountries(): Observable <Country[]> {
    return this.http.get<Country[]>(this.countryUrl);
  }
}