import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookappointmenturlComponent } from './bookappointmenturl.component';

describe('BookappointmenturlComponent', () => {
  let component: BookappointmenturlComponent;
  let fixture: ComponentFixture<BookappointmenturlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookappointmenturlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookappointmenturlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
