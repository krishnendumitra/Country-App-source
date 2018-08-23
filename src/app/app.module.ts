import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RegionComponent} from './region/region.component';
import {CountriesComponent} from './countries/countries.component';
import {CountryDetailsComponent} from './country-details/country-details.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CountryapiService} from './countryapi.service';
import {NotfoundComponent} from './notfound/notfound.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    CountriesComponent,
    CountryDetailsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    RouterModule.forRoot([
      {path: 'home', component: RegionComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'region/:id', component: CountriesComponent},
      {path: 'country/:alphaCode', component: CountryDetailsComponent},
      {path: '**', component: NotfoundComponent}
    ])
  ],
  providers: [CountryapiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
