import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryapiService {

  private baseApiUrl = `https://restcountries.eu/rest/v2/`;

  constructor(private myHttpClient: HttpClient) {
  }

  public getAllCountries(regionName: string): any {
    const allRegionResponse = this.myHttpClient.get(`${this.baseApiUrl}region/${regionName}`);
    return allRegionResponse;
  }

  public getCountryDetails(alphaCode: string): any {
    const singleCountryDetails = this.myHttpClient.get(`${this.baseApiUrl}alpha/${alphaCode}`);
    return singleCountryDetails;
  }

  public getSingleCountryInfoPromise(alphaCode): any {
    return new Promise((resolve, reject) => {
      this.myHttpClient.get(`${this.baseApiUrl}alpha/${alphaCode}`).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getAllCurrencies() {
    const allCurrencyResponse = this.myHttpClient.get(`${this.baseApiUrl}all?fields=currencies`);
    return allCurrencyResponse;
  }

  public getAlllanguages() {
    const allCurrencyResponse = this.myHttpClient.get(`${this.baseApiUrl}all?fields=languages`);
    return allCurrencyResponse;
  }

  public getCountryDetailsByCurrency(currency: string): any {
    const singleCountryDetails = this.myHttpClient.get(`${this.baseApiUrl}currency/${currency}`);
    return singleCountryDetails;
  }

  public getCountryDetailsByLanguage(lang: string): any {
    const singleCountryDetails = this.myHttpClient.get(`${this.baseApiUrl}lang/${lang}`);
    return singleCountryDetails;
  }

}
