import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Groups} from '../views/group/group-model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groupUrl = 'api/groups';  // URL to web api
  public updatedGroup: Groups;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
      private http: HttpClient
  ) { }

  getGroups(): Observable<Groups[]> {
    return this.http.get<Groups[]>(this.groupUrl);
  }

  getUpdatedData(group: Groups): void {
    this.updatedGroup = group;
  }

  addGroup(group: Groups): Observable<Groups> {
    return this.http.post<Groups>(this.groupUrl, group, this.httpOptions);
  }

  updateGroup(group: Groups): Observable<any> {
    return this.http.put(this.groupUrl, group, this.httpOptions);
  }

  deleteGroup(group: Groups | number): Observable<Groups> {
    const id = typeof group === 'number' ? group : group.id;
    const url = `${this.groupUrl}/${id}`;
    return this.http.delete<Groups>(url, this.httpOptions);
  }
}
