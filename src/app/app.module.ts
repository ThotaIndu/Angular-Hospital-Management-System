import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DoctorsignupComponent } from './doctorsignup/doctorsignup.component';
import { PatientsignupComponent } from './patientsignup/patientsignup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { PatientportalhomeComponent } from './patientportalhome/patientportalhome.component';
import { RescheduleappointmenturlComponent } from './rescheduleappointmenturl/rescheduleappointmenturl.component';
import { CancelappointmenturlComponent } from './cancelappointmenturl/cancelappointmenturl.component';
import { PaymentdetailsurlComponent } from './paymentdetailsurl/paymentdetailsurl.component';
import { ContactsupporturlComponent } from './contactsupporturl/contactsupporturl.component';
import { BookappointmenturlComponent } from './bookappointmenturl/bookappointmenturl.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DoctorsignupComponent, 
    PatientsignupComponent,
    PatientloginComponent,
   
    PatientportalhomeComponent,
    RescheduleappointmenturlComponent,
    CancelappointmenturlComponent,
    PaymentdetailsurlComponent,
    ContactsupporturlComponent,
    BookappointmenturlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
