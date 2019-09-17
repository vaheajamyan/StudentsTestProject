import {Injectable} from '@angular/core';
import {Faculty} from '../views/faculty/faculty-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FacultyService {
    private facultyUrl = 'api/faculties';  // URL to web api
    public updatedFaculty: Faculty;

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(
        private http: HttpClient,
    ) {
    }

    getFaculty(): Observable<Faculty[]> {
        return this.http.get<Faculty[]>(this.facultyUrl);
    }

    addFaculty(faculty: Faculty): Observable<Faculty> {
        return this.http.post<Faculty>(this.facultyUrl, faculty, this.httpOptions);
    }

    updateFaculty(faculty: Faculty): Observable<any> {
        return this.http.put(this.facultyUrl, faculty, this.httpOptions);
    }

    getUpdatedData(faculty: Faculty): void {
        this.updatedFaculty = faculty;
    }

    deleteFaculty(faculty: Faculty | number): Observable<Faculty> {
        const id = typeof faculty === 'number' ? faculty : faculty.id;
        const url = `${this.facultyUrl}/${id}`;
        return this.http.delete<Faculty>(url, this.httpOptions);
    }
}
