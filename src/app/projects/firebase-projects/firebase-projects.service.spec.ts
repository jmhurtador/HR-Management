import { TestBed } from '@angular/core/testing';

import { FirebaseProjectsService } from './firebase-projects.service';

describe('FirebaseProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseProjectsService = TestBed.get(FirebaseProjectsService);
    expect(service).toBeTruthy();
  });
});
