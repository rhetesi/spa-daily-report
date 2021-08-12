import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareportComponent } from './spareport.component';

describe('SpareportComponent', () => {
  let component: SpareportComponent;
  let fixture: ComponentFixture<SpareportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpareportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpareportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
