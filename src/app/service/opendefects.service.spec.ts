import { TestBed } from '@angular/core/testing';

import { OpendefectsService } from './opendefects.service';

describe('OpendefectsService', () => {
  let service: OpendefectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpendefectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
