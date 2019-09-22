import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GroupService} from '../../services/group.service';
import {Router} from '@angular/router';

enum Mode {
  Create, Update
}

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
})
export class GroupComponent implements OnInit {
  public mode: Mode = Mode.Create;
  public title = 'Create Group';

  public formGroup: FormGroup;

  constructor(
      private router: Router,
      private groupService: GroupService
  ) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', [Validators.required]),
      group: new FormControl('', [Validators.required])
    });

    if (this.groupService.updatedGroup) {
      this.formGroup.patchValue(this.groupService.updatedGroup);
      this.mode = Mode.Update;
      this.title = 'Edit Group';
      this.groupService.updatedGroup = null;
    }
  }

  // this function adds or updates groups depending on the mode
  onSubmit(): void {
    if (!this.formGroup.valid) {
      return;
    }
    switch (this.mode) {
      case Mode.Create:
        this.groupService.addGroup(this.formGroup.value).subscribe(f => console.log());
        this.router.navigate(['/groups']);
        break;
      case Mode.Update:
        this.groupService.updateGroup(this.formGroup.value)
            .subscribe(() => this.router.navigate(['/groups']));
        break;
    }
  }
}
