import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {provideStore} from '@ngrx/store';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        provideStore()
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
