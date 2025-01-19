import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelappointmenturlComponent } from './cancelappointmenturl.component';

describe('CancelappointmenturlComponent', () => {
  let component: CancelappointmenturlComponent;
  let fixture: ComponentFixture<CancelappointmenturlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancelappointmenturlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelappointmenturlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
