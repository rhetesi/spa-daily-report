import { TestBed } from '@angular/core/testing';

import { SpadatasService } from './spadatas.service';

describe('SpadatasService', () => {
  let service: SpadatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpadatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
