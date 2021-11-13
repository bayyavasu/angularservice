import { TestBed } from '@angular/core/testing';

import { SharemeService } from './shareme.service';

describe('SharemeService', () => {
  let service: SharemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
