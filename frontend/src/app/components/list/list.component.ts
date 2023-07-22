import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { Student } from 'src/app/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 public students:Student[];
 constructor(private _studentService:StudentService, private router:Router){

 }
 ngOnInit(){
   this.readStudents();
 }

 readStudents(){
  this._studentService.readStudents().subscribe(
    data => {
      console.log(data);
      this.students=data['msg'];
      
      console.log("students",this.students);
    },
    error => {
      console.log(error);
    }
  )
 }

 updateStudent(student){
   this._studentService.setter(student);
   this.router.navigate(['/insertUpdate'])
 }

 deleteStudent(student){
  this._studentService.deleteStudent(student._id).subscribe(
    data => {
      this.students.splice(this.students.indexOf(student));
      console.log(data);
    },
    error => {
      console.log(error);
    }
  )
 }
}
