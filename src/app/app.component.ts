import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryapiService} from './countryapi.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  codeForRouting = '';

  public allCurrency = [];
  allLanguages = [];

  constructor(private route: ActivatedRoute, private router: Router, private countryApi: CountryapiService, private location: Location) {
  }

  ngOnInit(): void {
    let temp1, temp2;
    let final1 = [];
    let final2 = [];
    this.countryApi.getAllCurrencies().subscribe(data => {
      temp1 = data;
      for (let i = 0; i < temp1.length; i++) {
        final1.push(temp1[i]['currencies'][0].code);
      }
      final1 = final1.filter(function (element) {
        return element !== undefined && element !== null && element !== '';
      });
      final1 = final1.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      });
      final1 = final1.sort();
      console.log(final1);
      final1 = final1.filter(e => e !== '(none)');
      this.allCurrency = final1;
    }, error1 => console.log(error1));


    this.countryApi.getAlllanguages().subscribe(data => {
      temp2 = data;
      for (let i = 0; i < temp2.length; i++) {
        final2.push(temp2[i]['languages'][0]['iso639_1']);
      }
      final2 = final2.filter(function (element) {
        return element !== undefined && element !== null && element !== '';
      });
      final2 = final2.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      });
      final2 = final2.sort();
      final2 = final2.filter(e => e !== '(none)');
      console.log(final2);
      this.allLanguages = final2;
    }, error1 => {
      alert('Internet Error');
    });


  }

  public showCurrencyFiltered() {
    if (this.codeForRouting !== '') {
      this.router.navigate(['/region', JSON.stringify({'currency': this.codeForRouting})]);
    } else {
      alert('please select a currency');
    }
  }

  public showLanguageFiltered() {
    if (this.codeForRouting !== '') {
      this.router.navigate(['/region', JSON.stringify({'language': this.codeForRouting})]);
    } else {
      alert('please select a language');
    }
  }
}
