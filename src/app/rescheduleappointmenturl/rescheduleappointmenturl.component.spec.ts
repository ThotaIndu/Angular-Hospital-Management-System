import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescheduleappointmenturlComponent } from './rescheduleappointmenturl.component';

describe('RescheduleappointmenturlComponent', () => {
  let component: RescheduleappointmenturlComponent;
  let fixture: ComponentFixture<RescheduleappointmenturlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RescheduleappointmenturlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RescheduleappointmenturlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
