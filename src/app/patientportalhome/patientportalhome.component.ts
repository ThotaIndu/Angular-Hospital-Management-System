import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patientportalhome',
  standalone: false,
  
  templateUrl: './patientportalhome.component.html',
  styleUrl: './patientportalhome.component.css'
})
export class PatientportalhomeComponent {
  constructor(private router:Router){
 }
 bookappointment(){
  this.router.navigate(['bookappointmenturl']);
  
}
rescheduleappointment(){
  this.router.navigate(['rescheduleappointmenturl'])
}
cancelappointment(){
  this.router.navigate(['cancelappointmenturl'])
}
paymentdetails(){
  this.router.navigate(['paymentdetailsurl'])
}
contactsupport(){
  this.router.navigate(['contactsupporturl'])
}
}
