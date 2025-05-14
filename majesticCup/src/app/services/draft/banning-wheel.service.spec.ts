import { TestBed } from '@angular/core/testing';

import { BanningWheelService } from './banning-wheel.service';

describe('BanningWheelService', () => {
  let service: BanningWheelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BanningWheelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
