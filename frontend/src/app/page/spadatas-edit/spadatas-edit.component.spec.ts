import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpadatasEditComponent } from './spadatas-edit.component';

describe('SpadatasEditComponent', () => {
  let component: SpadatasEditComponent;
  let fixture: ComponentFixture<SpadatasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpadatasEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpadatasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
