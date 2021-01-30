import { TestBed } from '@angular/core/testing';

import { IsloserviceService } from './isloservice.service';

describe('IsloserviceService', () => {
  let service: IsloserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsloserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
