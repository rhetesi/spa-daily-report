import { TestBed } from '@angular/core/testing';

import { WellnessdatasService } from './wellnessdatas.service';

describe('WellnessdatasService', () => {
  let service: WellnessdatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WellnessdatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
