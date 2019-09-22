import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Faculty} from './faculty-model';
import {FacultyService} from '../../services/faculty.service';
import {Router} from '@angular/router';

enum Mode {
    Create, Update
}

@Component({
    selector: 'app-create-faculty',
    templateUrl: './faculty.component.html',
})
export class FacultyComponent implements OnInit {
    public faculty: Faculty;
    public mode: Mode = Mode.Create;
    public title = 'Create Faculty';

    public formGroup: FormGroup;

    constructor(
        private facultyService: FacultyService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.formGroup = new FormGroup({
            id: new FormControl(null),
            name: new FormControl('', [Validators.required])
        });

        if (this.facultyService.updatedFaculty) {
            this.formGroup.patchValue(this.facultyService.updatedFaculty);
            this.mode = Mode.Update;
            this.title = 'Edit Faculty';
            this.facultyService.updatedFaculty = null;
        }
    }

    // this function adds or updates faculties depending on the mode
    onSubmit(): void {
        if (!this.formGroup.valid) {
            return;
        }
        switch (this.mode) {
            case Mode.Create:
                this.facultyService.addFaculty(this.formGroup.value).subscribe(f => console.log());
                this.router.navigate(['/faculties']);
                break;
            case Mode.Update:
                this.facultyService.updateFaculty(this.formGroup.value)
                    .subscribe(() => this.router.navigate(['/faculties']));
                break;
        }
    }
}
