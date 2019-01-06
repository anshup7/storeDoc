import { TestBed } from '@angular/core/testing';

import { StoreDocumentsService } from './store-documents.service';

describe('StoreDocumentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreDocumentsService = TestBed.get(StoreDocumentsService);
    expect(service).toBeTruthy();
  });
});
