import { Component, OnInit } from '@angular/core';
import {GroupService} from '../../services/group.service';
import {Groups} from './group-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './groups.component.html',
})
export class GroupsComponent implements OnInit {
  public groups: Groups[];

  constructor(
      private router: Router,
      private groupService: GroupService
  ) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.groupService.getGroups().subscribe(data => {
      this.groups = data;
    });
  }

  setGroups(group: Groups): void {
    this.groupService.getUpdatedData(group);
    this.router.navigate(['/editGroups']);
  }

  onRemove(group: Groups): void {
    this.groups = this.groups.filter(f => f !== group);
    this.groupService.deleteGroup(group).subscribe(f => console.log());
  }

}
