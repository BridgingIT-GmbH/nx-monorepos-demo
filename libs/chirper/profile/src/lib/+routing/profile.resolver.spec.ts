import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { profileResolver } from './profile.resolver';
import {UserProfile} from '../profile.model';

describe('profileResolver', () => {
  const executeResolver: ResolveFn<UserProfile | undefined> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => profileResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
