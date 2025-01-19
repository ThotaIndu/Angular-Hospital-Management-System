export class Patient{
    patientId:number;
    username:string;
    age:number;
    gender:string;
    //bookAppointment:boolean;
    payment:number;
    password:string;
    constructor(patientId:number,
        username:string,
        age:number,
        gender:string,

        payment:number,
        password:string){
    this.patientId=patientId;
    this.username=username;
    this.age=age;
    this.gender=gender;
    this.payment=payment;
    this.password=password;

    }
}