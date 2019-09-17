import { Component, OnInit } from '@angular/core';
import {Students} from '../students/student-model';
import {Groups} from '../group/group-model';
import {Faculty} from '../faculty/faculty-model';
import {StudentsService} from '../../services/students.service';
import {GroupService} from '../../services/group.service';
import {FacultyService} from '../../services/faculty.service';


@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public dashboard: Students[];
  public faculties: Faculty[];
  public groups: Groups[];

  filterResult: Students = {
    id: null,
    name: '',
    lastName: '',
    phone: '',
    email: '',
    faculty: '',
    group: ''
  };


  constructor(
      private studentSercice: StudentsService,
      private groupService: GroupService,
      private facultyService: FacultyService
  ) {
    // console.log(this.dashboard)
  }

  getStudents() {
    this.studentSercice.getStudents().subscribe(data => this.dashboard = data);
  }

  getGroups() {
    this.groupService.getGroups().subscribe(data => {
      this.groups = data;
    });
  }

  getFaculties() {
    this.facultyService.getFaculty().subscribe(data => {
      this.faculties = data;
    });
  }

  ngOnInit(): void {
    this.getStudents();
    this.getFaculties();
    this.getGroups();
  }

}
