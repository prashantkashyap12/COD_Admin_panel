import { TestBed } from '@angular/core/testing';

import { OldResultService } from './old-result.service';

describe('OldResultService', () => {
  let service: OldResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OldResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
