import { TestBed } from '@angular/core/testing';

import { CountryOrdersMapService } from './country-orders-map.service';

describe('CountryOrdersMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryOrdersMapService = TestBed.get(CountryOrdersMapService);
    expect(service).toBeTruthy();
  });
});
