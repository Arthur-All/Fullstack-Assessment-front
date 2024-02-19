import { Component, Input, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/Models/EmployeeModel';
import { EmplooyeeListService } from 'src/app/Services/emplooyee-list.service';
import { Observable, of } from 'rxjs';
import { CreateEmployeeDialogComponent } from './create-employee-dialog/create-employee-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
})
export class EmployeelistComponent implements OnInit {
  employees: Observable<EmployeeModel[]> = of([]);
  @Input() employee!: EmployeeModel;

  constructor(
    private employeeService: EmplooyeeListService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.employees = this.getEmployees();
  }

  getEmployees(): Observable<EmployeeModel[]> {
    return this.employeeService.getEmplooyeeList();
  }

  showCreateEmployee() {
    this.dialog.open(CreateEmployeeDialogComponent, {
      data: this.employee,
      minWidth: '480px',
    });
  }
}
