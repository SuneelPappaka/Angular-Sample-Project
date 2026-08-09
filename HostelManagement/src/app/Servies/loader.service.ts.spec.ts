import { TestBed } from '@angular/core/testing';

import { LoaderServiceTs } from './loader.service.ts';

describe('LoaderServiceTs', () => {
  let service: LoaderServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
