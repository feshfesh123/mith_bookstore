import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterManagerComponent } from './poster-manager.component';

describe('PosterManagerComponent', () => {
  let component: PosterManagerComponent;
  let fixture: ComponentFixture<PosterManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosterManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
