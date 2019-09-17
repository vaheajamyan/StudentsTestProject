import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { GroupRoutingModule } from './group-routing.module';
import { GroupsComponent } from './groups.component';
import { GroupComponent } from './group.component';


@NgModule({
  declarations: [GroupsComponent, GroupComponent],
  imports: [
    CommonModule,
    GroupRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GroupModule { }
