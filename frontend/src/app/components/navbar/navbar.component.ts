import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { StudentService } from 'src/app/shared/student.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router, private studentService:StudentService){} 

  insertStudent(event:any){
   event.preventDefault();
   this.studentService.setter(new Student());
   this.router.navigate(['/insertUpdate']);
   console.log("navigating")
  }
}
