import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameComponent } from './frame.component';
import {provideRouter} from '@angular/router';
import {signal} from '@angular/core';
import {provideStore} from '@ngrx/store';

describe('FrameComponent', () => {
  let component: FrameComponent;
  let fixture: ComponentFixture<FrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FrameComponent],
      providers: [
        provideStore(),
        provideRouter([])
      ]
    });
    fixture = TestBed.createComponent(FrameComponent);
    component = fixture.componentInstance;
    component.isLoggedIn = signal(false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
