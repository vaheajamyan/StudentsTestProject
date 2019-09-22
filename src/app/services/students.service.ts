import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Students} from '../views/students/student-model';

@Injectable({
    providedIn: 'root'
})
export class StudentsService {
    private studentsUrl = 'api/students';  // URL to web api
    public updatedStudents: Students;

    constructor(
        private http: HttpClient
    ) { }

    // get All Students
    getStudents(): Observable<Students[]> {
        return this.http.get<Students[]>(this.studentsUrl);
    }

    // get updated student data
    getUpdatedData(student: Students): void {
        this.updatedStudents = student;
    }

    // add student
    addStudent(student: Students): Observable<Students> {
        return this.http.post<Students>(this.studentsUrl, student);
    }

    // change student data
    updateStudent(student: Students): Observable<any> {
        return this.http.put(this.studentsUrl, student);
    }

    // delete selected student
    deleteStudent(student: Students | number): Observable<Students> {
        const id = typeof student === 'number' ? student : student.id;
        const url = `${this.studentsUrl}/${id}`;
        return this.http.delete<Students>(url);
    }
}
