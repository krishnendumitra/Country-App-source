import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryapiService} from '../countryapi.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  public currentRoute: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.currentRoute = this.router.url;
  }

}
