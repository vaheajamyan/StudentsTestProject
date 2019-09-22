import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Groups} from '../views/group/group-model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groupUrl = 'api/groups';  // URL to web api
  public updatedGroup: Groups;

  constructor(
      private http: HttpClient
  ) { }

  // get all Groups
  getGroups(): Observable<Groups[]> {
    return this.http.get<Groups[]>(this.groupUrl);
  }

  // get updated group data
  getUpdatedData(group: Groups): void {
    this.updatedGroup = group;
  }

  // add your own group
  addGroup(group: Groups): Observable<Groups> {
    return this.http.post<Groups>(this.groupUrl, group);
  }

  // change group name
  updateGroup(group: Groups): Observable<any> {
    return this.http.put(this.groupUrl, group);
  }

  // delete selected group
  deleteGroup(group: Groups | number): Observable<Groups> {
    const id = typeof group === 'number' ? group : group.id;
    const url = `${this.groupUrl}/${id}`;
    return this.http.delete<Groups>(url);
  }
}
