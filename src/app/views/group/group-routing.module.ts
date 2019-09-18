import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupsComponent} from './groups.component';
import {GroupComponent} from './group.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Groups'
    },
    children: [
      {
        data: {
          title: ''
        },
        path: '',
        component: GroupsComponent,
      },
      {
        data: {
          title: 'Create'
        },
        path: 'create',
        component: GroupComponent,
      },
      {
        data: {
          title: 'Edit'
        },
        path: 'edit',
        component: GroupComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
