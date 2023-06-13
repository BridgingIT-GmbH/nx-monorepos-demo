import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddidtionalAreaComponent } from './addidtional-area.component';

describe('UserareaComponent', () => {
  let component: AddidtionalAreaComponent;
  let fixture: ComponentFixture<AddidtionalAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddidtionalAreaComponent]
    });
    fixture = TestBed.createComponent(AddidtionalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
