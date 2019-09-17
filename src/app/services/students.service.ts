import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Students} from '../views/students/student-model';

@Injectable({
    providedIn: 'root'
})
export class StudentsService {
    private studentsUrl = 'api/Students';  // URL to web api
    public updatedStudents: Students;

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(
        private http: HttpClient
    ) { }

    getStudents(): Observable<Students[]> {
        return this.http.get<Students[]>(this.studentsUrl);
    }

    getUpdatedData(student: Students): void {
        this.updatedStudents = student;
    }

    addStudent(student: Students): Observable<Students> {
        return this.http.post<Students>(this.studentsUrl, student, this.httpOptions);
    }

    updateStudent(student: Students): Observable<any> {
        return this.http.put(this.studentsUrl, student, this.httpOptions);
    }

    deleteStudent(studend: Students | number): Observable<Students> {
        const id = typeof studend === 'number' ? studend : studend.id;
        const url = `${this.studentsUrl}/${id}`;
        return this.http.delete<Students>(url, this.httpOptions);
    }
}
