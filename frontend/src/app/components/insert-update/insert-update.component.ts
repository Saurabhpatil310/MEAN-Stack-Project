import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { StudentService } from 'src/app/shared/student.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-insert-update',
  templateUrl: './insert-update.component.html',
  styleUrls: ['./insert-update.component.css']
})
export class InsertUpdateComponent implements OnInit{
  public student:Student;
 constructor(private router:Router, private studentService:StudentService){

 }
 ngOnInit(){
  this.student=this.studentService.getter();
  console.log(this.student)
 }
 insertOrUpdate(){
  console.log("called")
  if(this.student._id == undefined){
  this.studentService.addStudent(this.student).subscribe(
    data =>{
     console.log(data);
    this.router.navigate(['/']);
    },
    error =>{
      console.log(error);
    }
  )
 }
 else{
  console.log("called again")
  this.studentService.updateStudent(this.student).subscribe(
    data =>{
     console.log(data);
     console.log('navigating')
    this.router.navigate(['/']);
    },
    error =>{
      console.log(error);
    }
  )
 }
}
}
