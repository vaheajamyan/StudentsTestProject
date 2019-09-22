import {Injectable} from '@angular/core';
import {Faculty} from '../views/faculty/faculty-model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FacultyService {
    private facultyUrl = 'api/faculties';  // URL to web api
    public updatedFaculty: Faculty;

    constructor(
        private http: HttpClient,
    ) {
    }

    // get All Faculties
    getFaculty(): Observable<Faculty[]> {
        return this.http.get<Faculty[]>(this.facultyUrl);
    }

    // add your own faculty
    addFaculty(faculty: Faculty): Observable<Faculty> {
        return this.http.post<Faculty>(this.facultyUrl, faculty);
    }

    // change faculty name
    updateFaculty(faculty: Faculty): Observable<any> {
        return this.http.put(this.facultyUrl, faculty);
    }

    // get updated faculty data
    getUpdatedData(faculty: Faculty): void {
        this.updatedFaculty = faculty;
    }

    // delete selected faculty
    deleteFaculty(faculty: Faculty | number): Observable<Faculty> {
        const id = typeof faculty === 'number' ? faculty : faculty.id;
        const url = `${this.facultyUrl}/${id}`;
        return this.http.delete<Faculty>(url);
    }
}
