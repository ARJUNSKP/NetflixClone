import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselbannerComponent } from './caroselbanner.component';

describe('CaroselbannerComponent', () => {
  let component: CaroselbannerComponent;
  let fixture: ComponentFixture<CaroselbannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaroselbannerComponent]
    });
    fixture = TestBed.createComponent(CaroselbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
