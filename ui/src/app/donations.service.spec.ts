import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DonationsService } from './donations.service';

describe('DonationsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }),
  );

  it('should be created', () => {
    const service: DonationsService = TestBed.get(DonationsService);
    expect(service).toBeTruthy();
  });
});
