import { TestBed } from '@angular/core/testing';

import { EmplooyeeListService } from './emplooyee-list.service';

describe('EmplooyeeListService', () => {
  let service: EmplooyeeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplooyeeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
