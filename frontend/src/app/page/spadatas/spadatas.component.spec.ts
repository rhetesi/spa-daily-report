import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpadatasComponent } from './spadatas.component';

describe('SpadatasComponent', () => {
  let component: SpadatasComponent;
  let fixture: ComponentFixture<SpadatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpadatasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpadatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
