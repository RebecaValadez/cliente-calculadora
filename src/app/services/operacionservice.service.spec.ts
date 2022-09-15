import { TestBed } from '@angular/core/testing';

import { OperacionserviceService } from './operacionservice.service';

describe('OperacionserviceService', () => {
  let service: OperacionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperacionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
