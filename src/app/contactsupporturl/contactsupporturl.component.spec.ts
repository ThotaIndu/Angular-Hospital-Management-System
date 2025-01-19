import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsupporturlComponent } from './contactsupporturl.component';

describe('ContactsupporturlComponent', () => {
  let component: ContactsupporturlComponent;
  let fixture: ComponentFixture<ContactsupporturlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactsupporturlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsupporturlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
