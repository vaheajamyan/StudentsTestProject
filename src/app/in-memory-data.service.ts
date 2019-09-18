import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Faculty } from 'app/views/faculty/faculty-model';
import { Injectable } from '@angular/core';



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
    const Students = [
      {id: 1, name: 'Anna', lastName: 'Soghomonyan', email: 'annasoghomonyan@gmail.com', phone: '+37498888888', faculty: 'Economy', group: 'S-040'},
      {id: 2, name: 'Maga', lastName: 'Kirakosyan', email: 'magakirakosyan@gmail.com', phone: '+37494749945', faculty: 'Socology', group: 'Group-1'},
      {id: 3, name: 'Mane', lastName: 'Hakobyan', email: 'manehakobyan@gmail.com', phone: '+37477744859', faculty: 'Marketing', group: 'Group-43'}
    ];
    return {faculties, groups, Students};
  }

  genId(faculties: Faculty[]): number {
    return faculties.length > 0 ? Math.max(...faculties.map(f => f.id)) + 1 : 1;
  }
}
