import {Component, OnInit} from '@angular/core';
import {Faculty} from './faculty-model';
import {FacultyService} from '../../services/faculty.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-faculty',
    templateUrl: './faculties.component.html',
    styleUrls: []
})
export class FacultiesComponent implements OnInit {
    public faculties: Faculty[];

    constructor(
        private facultyService: FacultyService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.getFaculties();
    }

    // get all faculties from facultyService
    getFaculties() {
        this.facultyService.getFaculty().subscribe(data => {
            this.faculties = data;
        });
    }

    // set updated faculty data and go to edit page
    setFaculty(faculty: Faculty): void {
        this.facultyService.getUpdatedData(faculty);
        this.router.navigate(['/faculties/edit']);
    }

    // call delete function from facultyService and filter faculties Array
    onRemove(faculty: Faculty): void {
        this.faculties = this.faculties.filter(f => f !== faculty);
        this.facultyService.deleteFaculty(faculty).subscribe(f => console.log());
    }

}
