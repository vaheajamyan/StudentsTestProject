import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupsComponent} from './groups.component';
import {GroupComponent} from './group.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        redirectTo: 'groups'
      },
      {
        path: 'groups',
        component: GroupsComponent,
      },
      {
        path: 'createGroup',
        component: GroupComponent,
      },
      {
        path: 'editGroups',
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
