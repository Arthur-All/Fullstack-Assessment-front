import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeModel } from 'src/app/Models/EmployeeModel';

@Pipe({
  name: 'employeePipe',
})
export class EmployeeFullNamePipe implements PipeTransform {
  transform(employee: EmployeeModel): string {
    return `${employee.first_name} ${employee.last_name}`;
  }
}
