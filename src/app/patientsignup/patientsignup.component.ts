import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../model/patient';
import { PatientService } from '../service/patient.service';
@Component({
  selector: 'app-patientsignup',
  standalone: false,
  
  templateUrl: './patientsignup.component.html',
  styleUrl: './patientsignup.component.css'
})
export class PatientsignupComponent {
  constructor(private router:Router,private patientService:PatientService){

  }
  patient=new Patient(0,"",0,"",0,"");
  
  
  onSubmit(){
    console.log(this.patient);
 this.patientService.patientsignup(this.patient).subscribe(
  (response:any)=>{
    alert("patient registration Sucessfully");
    this.router.navigate(['patientloginurl']);
  }
 )
  

  }
  Onback(){
    

  }

}
