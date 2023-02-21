import { TestBed } from '@angular/core/testing';

import { DailyResultsService } from './daily-results.service';

describe('DailyResultsService', () => {
  let service: DailyResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
