import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeModel } from 'src/app/Models/EmployeeModel';
import { EmplooyeeListService } from 'src/app/Services/emplooyee-list.service';
@Component({
  selector: 'app-create-employee-dialog',
  templateUrl: './create-employee-dialog.component.html',
  styleUrls: ['./create-employee-dialog.component.css'],
})
export class CreateEmployeeDialogComponent implements OnInit {
  @Input() employee: EmployeeModel = new EmployeeModel();
  @Output() emplooyeeUpdated = new EventEmitter<EmployeeModel[]>();
  constructor(private employeeService: EmplooyeeListService) {}

  ngOnInit(): void {}

  createEmployee(employee: EmployeeModel) {
    console.log(employee);
    this.employeeService
      .createEmployee(employee)
      .subscribe((employees: EmployeeModel[]) =>
        this.emplooyeeUpdated.emit(employees)
      );
  }

  refresh() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
