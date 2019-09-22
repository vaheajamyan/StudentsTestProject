import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentsService} from '../../services/students.service';
import {Router} from '@angular/router';
import {Groups} from '../group/group-model';
import {Faculty} from '../faculty/faculty-model';
import {GroupService} from '../../services/group.service';
import {FacultyService} from '../../services/faculty.service';

enum Mode {
  Create, Update
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})
export class StudentComponent implements OnInit {
  public mode: Mode = Mode.Create;
  public title = 'Create Student';

  public formGroup: FormGroup;

  public groups: Groups[];
  public faculties: Faculty[];


  constructor(
      private router: Router,
      private studentsService: StudentsService,
      private groupService: GroupService,
      private facultyService: FacultyService
  ) { }

  ngOnInit() {
    this.getGroups();
    this.getFaculties();
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      faculty: new FormControl('', [Validators.required]),
      group: new FormControl('', [Validators.required])
    });

    if (this.studentsService.updatedStudents) {
      this.formGroup.patchValue(this.studentsService.updatedStudents);
      this.mode = Mode.Update;
      this.title = 'Edit Student';
      this.studentsService.updatedStudents = null;
    }
  }

  // get all groups to complete the student group field
  getGroups() {
    this.groupService.getGroups().subscribe(data => {
      this.groups = data;
    });
  }

  // get all faculties to complete the student faculty field
  getFaculties() {
    this.facultyService.getFaculty().subscribe(data => {
      this.faculties = data;
    });
  }

  // this function adds or updates students depending on the mode
  onSubmit(): void {
    if (!this.formGroup.valid) {
      return;
    }
    switch (this.mode) {
      case Mode.Create:
        this.studentsService.addStudent(this.formGroup.value).subscribe(f => console.log());
        this.router.navigate(['/students']);
        break;
      case Mode.Update:
        this.studentsService.updateStudent(this.formGroup.value)
            .subscribe(() => this.router.navigate(['/students']));
        break;
    }
  }

}
