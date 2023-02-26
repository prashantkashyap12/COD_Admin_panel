import { TestBed } from '@angular/core/testing';

import { ErrorCommitService } from './error-commit.service';

describe('ErrorCommitService', () => {
  let service: ErrorCommitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorCommitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
