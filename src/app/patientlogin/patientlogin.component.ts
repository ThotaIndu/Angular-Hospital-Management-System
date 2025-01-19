import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-patientlogin',
  standalone: false,
  
  templateUrl: './patientlogin.component.html',
  styleUrl: './patientlogin.component.css'
})
export class PatientloginComponent {
  patient=new Patient(0,"",0,"",0,"");
  constructor(private router:Router,private patientService:PatientService){
  }

  onSubmit(){
    
this.patientService.patientlogin(this.patient).subscribe(
  (response:any)=>
  {
    if(response!=null){
    alert("login success");
    this.router.navigate(["patientportalhomeurl"]);
    }else
    alert("Login failed")
  }
)
    
  }
  onBack(){
    this.router.navigate(['patientsignupurl']);
  }
}
