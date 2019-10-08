import { TestBed } from '@angular/core/testing';

import { DonationsService } from './donations.service';

describe('DonationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonationsService = TestBed.get(DonationsService);
    expect(service).toBeTruthy();
  });
});
