import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private student:Student;
  private baseUrl="http://localhost:8000";
  constructor(private _http:HttpClient) { }

  addStudent(student:Student){
    let headers=new HttpHeaders({'Content-Type':'application/json'});
    let options = {
     headers: headers
    };
    
    return this._http.post(this.baseUrl+"/insert",student,options);
   }

   
  readStudents(){
    let headers=new HttpHeaders({'Content-Type':'application/json'});
    let options = {
     headers: headers
    };
    return this._http.get(this.baseUrl+"/students",options);
   }

   updateStudent(student:Student){
    let headers=new HttpHeaders({'Content-Type':'application/json'});
    let options = {
     headers: headers
    };
    return this._http.put(this.baseUrl+"/update",JSON.stringify(student),options);
   }

   deleteStudent(_id:number){
    let headers=new HttpHeaders({'Content-Type':'application/json'});
    let options = {
     headers: headers
    };
    return this._http.delete(this.baseUrl+"/delete/"+_id,options);
   }

   setter(student:Student){
     this.student=student;
   }

   getter(){
    return this.student;
   }

}



  
