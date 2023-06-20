import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileComponent} from './profile.component';
import {provideStore} from '@ngrx/store';
import {provideRouter} from '@angular/router';
import {signal} from '@angular/core';
import {chirpFeatureKey} from '../chirp';
import {provideMockStore} from '@ngrx/store/testing';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProfileComponent],
      providers: [
        provideStore(),
        provideMockStore({
          initialState: {
            [chirpFeatureKey]: {
              chirps: []
            }
          }
        }),
        provideRouter([]),

      ]
    });
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    component.chirps = signal([]);
    component.isLoggedIn = signal(false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
