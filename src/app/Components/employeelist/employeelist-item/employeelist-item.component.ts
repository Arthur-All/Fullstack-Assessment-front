import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeModel } from 'src/app/Models/EmployeeModel';
import { EmployeeDetailsDialogComponent } from '../employee-details-dialog/employee-details-dialog.component';
import { CreateEmployeeDialogComponent } from '../create-employee-dialog/create-employee-dialog.component';
import { EmployeeDeleteDialogComponent } from '../employee-delete-dialog/employee-delete-dialog.component';

@Component({
  selector: 'app-employeelist-item',
  templateUrl: './employeelist-item.component.html',
  styleUrls: ['./employeelist-item.component.css'],
})
export class EmployeelistItemComponent implements OnInit {
  @Input() employee!: EmployeeModel;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  showDetails() {
    this.dialog.open(EmployeeDetailsDialogComponent, {
      data: this.employee,
      minWidth: '480px',
    });
  }
  showCreateEmployee() {
    this.dialog.open(CreateEmployeeDialogComponent, {
      data: this.employee,
      minWidth: '480px',
    });
  }
  showDeleteDialog() {
    this.dialog.open(EmployeeDeleteDialogComponent, {
      data: this.employee,
      minWidth: '240px',
    });
  }
}
