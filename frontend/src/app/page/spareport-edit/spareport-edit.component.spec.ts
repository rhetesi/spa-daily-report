import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareportEditComponent } from './spareport-edit.component';

describe('SpareportEditComponent', () => {
  let component: SpareportEditComponent;
  let fixture: ComponentFixture<SpareportEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpareportEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpareportEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
