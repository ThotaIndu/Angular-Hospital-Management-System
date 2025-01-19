import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentdetailsurlComponent } from './paymentdetailsurl.component';

describe('PaymentdetailsurlComponent', () => {
  let component: PaymentdetailsurlComponent;
  let fixture: ComponentFixture<PaymentdetailsurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentdetailsurlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentdetailsurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
