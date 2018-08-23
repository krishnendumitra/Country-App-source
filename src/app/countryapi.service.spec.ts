import { TestBed, inject } from '@angular/core/testing';

import { CountryapiService } from './countryapi.service';

describe('CountryapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryapiService]
    });
  });

  it('should be created', inject([CountryapiService], (service: CountryapiService) => {
    expect(service).toBeTruthy();
  }));
});
