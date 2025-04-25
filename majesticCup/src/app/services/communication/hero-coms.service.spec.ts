import { TestBed } from '@angular/core/testing';

import { HeroComsService } from './hero-coms.service';

describe('HeroComsService', () => {
  let service: HeroComsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroComsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
