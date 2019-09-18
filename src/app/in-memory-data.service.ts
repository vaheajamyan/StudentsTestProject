import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Faculty } from './views/faculty/faculty-model';
import { Students } from './views/students/student-model';
import { Groups } from './views/group/group-model';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const faculties = [
      {id: 1, name: 'Economy'},
      {id: 2, name: 'Socology'},
      {id: 3, name: 'Marketing'},
    ];
    const groups = [
      {id: 1, name: 'Economy', group: 'S-040'},
      {id: 2, name: 'Socology', group: 'Group-1'},
      {id: 3, name: 'Marketing', group: 'Group-43'},
    ];
    const students = [
      {id: 1, name: 'Anna', lastName: 'Soghomonyan', email: 'annasoghomonyan@gmail.com', phone: '+37498888888', faculty: 'Economy', group: 'S-040'},
      {id: 2, name: 'Maga', lastName: 'Kirakosyan', email: 'magakirakosyan@gmail.com', phone: '+37494749945', faculty: 'Socology', group: 'Group-1'},
      {id: 3, name: 'Mane', lastName: 'Hakobyan', email: 'manehakobyan@gmail.com', phone: '+37477744859', faculty: 'Marketing', group: 'Group-43'}
    ];
    return {faculties, groups, students};
  }

  genId<T extends Faculty | Students | Groups>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(m => m.id)) + 1 : 1;
  }
}
