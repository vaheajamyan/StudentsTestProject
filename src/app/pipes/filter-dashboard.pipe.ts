import { Pipe, PipeTransform } from '@angular/core';
import {Students} from '../views/students/student-model';

@Pipe({
  name: 'dashboardFilter'
})
export class FilterDashboardPipe implements PipeTransform {

  transform(
      dashboard: Students[],
      id: number,
      name: string,
      lastName: string,
      email: string,
      phone: string,
      faculty: string,
      group: string,
  ): any {
    return dashboard.filter(val =>
        (!id ||  Number(val.id) === Number(id)) &&
        (!name ||  val.name.toLowerCase().indexOf(name.toLowerCase()) !== -1) &&
        (!email ||  val.email.toLowerCase().indexOf(email.toLowerCase()) !== -1) &&
        (!lastName ||  val.lastName.toLowerCase().indexOf(lastName.toLowerCase()) !== -1) &&
        (!phone ||  val.phone.toLowerCase().indexOf(phone.toLowerCase()) !== -1) &&
        (!group ||  val.group.toLowerCase().indexOf(group.toLowerCase()) !== -1) &&
        (!faculty ||  val.faculty.toLowerCase().indexOf(faculty.toLowerCase()) !== -1));
  }

}
