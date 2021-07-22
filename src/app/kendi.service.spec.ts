import { TestBed } from '@angular/core/testing';

import { KendiService } from './kendi.service';

describe('KendiService', () => {
  let service: KendiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KendiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
