import { Component, OnInit } from '@angular/core';
import {Students} from './student-model';
import {Router} from '@angular/router';
import {StudentsService} from '../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent implements OnInit {
  public students: Students[];

  constructor(
      private router: Router,
      private studentService: StudentsService
  ) { }

  ngOnInit() {
    this.getStudents();
  }

  // get all students from studentService
  getStudents() {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  // set updated student data and go to edit page
  setStudents(student: Students): void {
    this.studentService.getUpdatedData(student);
    this.router.navigate(['/students/edit']);
  }

  // call delete function from studentService and filter students Array
  onRemove(student: Students): void {
    this.students = this.students.filter(f => f !== student);
    this.studentService.deleteStudent(student).subscribe(f => console.log());
  }

}
