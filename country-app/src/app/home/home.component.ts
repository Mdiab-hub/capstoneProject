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
  largetCountires: Country[] = []; //calls country array from countryService component
  gdpCountries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.setPopulatedCountries();
    this.setLargestCountries();
    this.setGDPCountries();
  }

  setPopulatedCountries(): void {
    this.populatedCountries = this.countryService.getPopulatedCountries();
  }

  setLargestCountries(): void {
    this.largetCountires = this.countryService.getLargestCountries();
  }

  setGDPCountries(): void {
    this.gdpCountries = this.countryService.getGDPCountries();
  }

}
