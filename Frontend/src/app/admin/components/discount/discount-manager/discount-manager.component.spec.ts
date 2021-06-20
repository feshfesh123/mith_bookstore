import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountManagerComponent } from './discount-manager.component';

describe('DiscountManagerComponent', () => {
  let component: DiscountManagerComponent;
  let fixture: ComponentFixture<DiscountManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
