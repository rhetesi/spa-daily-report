import { TestBed } from '@angular/core/testing';

import { SpareportService } from './spareport.service';

describe('SpareportService', () => {
  let service: SpareportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpareportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
