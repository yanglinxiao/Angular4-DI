import { TestBed, inject } from '@angular/core/testing';

import { ChildProductServiceService } from './another-product-service.service';

describe('ChildProductServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildProductServiceService]
    });
  });

  it('should ...', inject([ChildProductServiceService], (service: ChildProductServiceService) => {
    expect(service).toBeTruthy();
  }));
});
