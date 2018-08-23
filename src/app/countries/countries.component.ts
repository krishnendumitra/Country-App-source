import {Component, OnInit} from '@angular/core';
import {CountryapiService} from '../countryapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: '0'}),
        animate('1s ease-out', style({opacity: '1'})),
      ]),
    ]),
  ]
})
export class CountriesComponent implements OnInit {
  public allCountries: any;
  public isVisible = false;
  public currentRegion: string;

  constructor(private countryApi: CountryapiService, private route: ActivatedRoute, private router: Router, private location: Location) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.isVisible = false;
      let flag = this.IsJsonString(param.get('id'));
      if (flag) {
        let jsonParam = JSON.parse(param.get('id'));
        console.log(jsonParam);
        if (jsonParam.hasOwnProperty('currency')) {
          this.getCountriesByCurrency(jsonParam['currency']);
        }
        if (jsonParam.hasOwnProperty('language')) {
          this.getCountriesByLanguage(jsonParam['language']);
        }
      } else {
        this.getCountriesByRegionId(param.get('id'));
      }

    }, error => {
      console.log('no param found');
    });
  }

  public getCountriesByRegionId(param) {
    this.allCountries = this.countryApi.getAllCountries(param).subscribe(data => {
      this.currentRegion = param;
      console.log(data);
      this.allCountries = data;
      this.isVisible = true;
    }, error => {
      alert('Internet Error');
    });
  }

  public getCountriesByCurrency(currency: string) {
    this.allCountries = this.countryApi.getCountryDetailsByCurrency(currency).subscribe(data => {
      this.currentRegion = '';
      console.log(data);
      this.allCountries = data;
      this.isVisible = true;
    }, error => {
      alert('Internet Error');
    });
  }

  public getCountriesByLanguage(lang: string) {
    this.allCountries = this.countryApi.getCountryDetailsByLanguage(lang).subscribe(data => {
      this.currentRegion = '';
      console.log(data);
      this.allCountries = data;
      this.isVisible = true;
    }, error => {
      alert('Internet Error');
    });
  }

  public goBack() {
    this.location.back();
  }

  public IsJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

}
