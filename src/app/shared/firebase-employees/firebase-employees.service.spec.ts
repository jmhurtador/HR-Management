import { TestBed } from '@angular/core/testing';

import { FirebaseEmployeesService } from './firebase-employees.service';

describe('FirebaseEmployeesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseEmployeesService = TestBed.get(FirebaseEmployeesService);
    expect(service).toBeTruthy();
  });
});
