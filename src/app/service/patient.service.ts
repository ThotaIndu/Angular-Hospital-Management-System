import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }
    url="http://localhost:9091/patient";

     patientsignup(patient:any){
     return this.http.post(`${this.url}/signUp`,patient);
    }

    patientlogin(patient:any){
      return this.http.post(`${this.url}/signIn`,patient);
     }



  }

