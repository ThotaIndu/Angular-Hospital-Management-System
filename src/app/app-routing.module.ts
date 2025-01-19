import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DoctorsignupComponent } from './doctorsignup/doctorsignup.component';
import { PatientsignupComponent } from './patientsignup/patientsignup.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { PatientportalhomeComponent } from './patientportalhome/patientportalhome.component';
//import { registerAppScopedDispatcher } from '@angular/core/primitives/event-dispatch';
import { RescheduleappointmenturlComponent } from './rescheduleappointmenturl/rescheduleappointmenturl.component';
import { CancelappointmenturlComponent } from './cancelappointmenturl/cancelappointmenturl.component';
import { PaymentdetailsurlComponent } from './paymentdetailsurl/paymentdetailsurl.component';
import { ContactsupporturlComponent } from './contactsupporturl/contactsupporturl.component';
import { BookappointmenturlComponent } from './bookappointmenturl/bookappointmenturl.component';

const routes: Routes = [{path:"",component:WelcomeComponent},
  {path:"doctorsignupurl",component:DoctorsignupComponent},
  {path:"patientsignupurl",component:PatientsignupComponent},
  {path:"patientloginurl",component:PatientloginComponent},
  {path:"patientportalhomeurl",component:PatientportalhomeComponent},
  {path:"bookappointmenturl",component:BookappointmenturlComponent},
  {path:"rescheduleappointmenturl",component:RescheduleappointmenturlComponent},
  {path:"cancelappointmenturl",component:CancelappointmenturlComponent},
  {path:"paymentdetailsurl",component:PaymentdetailsurlComponent},
  {path:"contactsupporturl",component:ContactsupporturlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
