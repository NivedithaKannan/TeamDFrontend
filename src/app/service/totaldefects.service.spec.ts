import { TestBed } from '@angular/core/testing';

import { TotaldefectsService } from './totaldefects.service';

describe('TotaldefectsService', () => {
  let service: TotaldefectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotaldefectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
