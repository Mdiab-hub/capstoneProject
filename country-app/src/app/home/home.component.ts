import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  populatedCountries: Country[] = [];
  largestCountries: Country[] = []; //calls country array from countryService component
  gdpCountries: Country[] = [];
  countries: Country[];
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
    this.setPopulatedCountries();
    this.setLargestCountries();
    this.setGDPCountries();
  }

  getCountries(): void {
    this.countryService.getCountries().subscribe(data => {
        this.countries = data
        
    });
  }

  setPopulatedCountries(): void {
    // this.populatedCountries = this.countries.sort((a, b) => b.population - a.population).slice(0, 3);
    this.countryService.getCountries()
      .subscribe(data => {
        this.populatedCountries = data.sort((a, b) => b.population - a.population).slice(0, 3);
      })
  }

  setLargestCountries(): void {
    // this.largestCountries = this.countries.sort((a, b) => b.area - a.area).slice(0, 3);
    this.countryService.getCountries()
      .subscribe(data => {
        this.largestCountries = data.sort((a, b) => b.area - a.area).slice(0, 3);
      })
  }

  setGDPCountries(): void {
    // this.gdpCountries = this.countries.sort((a, b) => b.gdp - a.gdp).slice(0, 3);
    this.countryService.getCountries()
      .subscribe(data => {
        this.gdpCountries = data.sort((a, b) => b.gdp - a.gdp).slice(0, 3);
      })
  }
}


