import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Students'
    },
    children: [
      {
        data: {
          title: ''
        },
        path: '',
        component: StudentsComponent,
      },
      {
        data: {
          title: 'Create'
        },
        path: 'create',
        component: StudentComponent,
      },
      {
        data: {
          title: 'Edit'
        },
        path: 'edit',
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
