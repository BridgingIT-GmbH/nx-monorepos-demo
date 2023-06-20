import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChirpComponent } from './chirp.component';
import {provideRouter} from '@angular/router';

describe('ChirpComponent', () => {
  let component: ChirpComponent;
  let fixture: ComponentFixture<ChirpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChirpComponent],
      providers: [
        provideRouter([])
      ]
    });
    fixture = TestBed.createComponent(ChirpComponent);
    component = fixture.componentInstance;
    component.user = {
      id: 1,
      profilepic: "http://localhost:4200/assets/greg.jpg",
      name: "Gregor",
      handle: "@GregorSpeck"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
