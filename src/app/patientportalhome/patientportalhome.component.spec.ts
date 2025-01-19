import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientportalhomeComponent } from './patientportalhome.component';

describe('PatientportalhomeComponent', () => {
  let component: PatientportalhomeComponent;
  let fixture: ComponentFixture<PatientportalhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientportalhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientportalhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
