import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellnessEditComponent } from './wellness-edit.component';

describe('WellnessEditComponent', () => {
  let component: WellnessEditComponent;
  let fixture: ComponentFixture<WellnessEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellnessEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellnessEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
