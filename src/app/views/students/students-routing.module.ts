import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        redirectTo: 'students'
      },
      {
        path: 'students',
        component: StudentsComponent,
      },
      {
        path: 'createStudents',
        component: StudentComponent,
      },
      {
        path: 'editStudents',
        component: StudentComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
