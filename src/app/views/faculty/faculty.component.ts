import {Component, OnInit} from '@angular/core';
import {Faculty} from './faculty-model';
import {FacultyService} from '../../services/faculty.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-faculty',
    templateUrl: './faculty.component.html',
    styleUrls: []
})
export class FacultyComponent implements OnInit {
    public faculties: Faculty[];

    constructor(
        private facultyService: FacultyService,
        private router: Router
    ) {
    }

    getFaculties() {
        this.facultyService.getFaculty().subscribe(data => {
            this.faculties = data;
        });
    }

    setFaculty(faculty: Faculty): void {
        this.facultyService.getUpdatedData(faculty);
        this.router.navigate(['/editFaculties']);
    }

    onRemove(faculty: Faculty): void {
        this.faculties = this.faculties.filter(f => f !== faculty);
        this.facultyService.deleteFaculty(faculty).subscribe(f => console.log());
    }

    ngOnInit() {
        this.getFaculties();
    }

}
