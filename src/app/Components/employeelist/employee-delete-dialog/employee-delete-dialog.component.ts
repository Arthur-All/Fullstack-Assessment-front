import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeModel } from 'src/app/Models/EmployeeModel';
import { EmplooyeeListService } from 'src/app/Services/emplooyee-list.service';

@Component({
  selector: 'app-employee-delete-dialog',
  templateUrl: './employee-delete-dialog.component.html',
  styleUrls: ['./employee-delete-dialog.component.css'],
})
export class EmployeeDeleteDialogComponent implements OnInit {
  @Input() employee: EmployeeModel = new EmployeeModel();
  @Output() emplooyeeUpdated = new EventEmitter<EmployeeModel[]>();
  constructor(
    private employeeService: EmplooyeeListService,
    @Inject(MAT_DIALOG_DATA) public data: EmployeeModel
  ) {}

  ngOnInit(): void {}

  async deleteEmployee(employee: EmployeeModel) {
    this.employeeService
      .deleteEmplooyee(employee)
      .subscribe((employees: EmployeeModel[]) =>
        this.emplooyeeUpdated.emit(employees)
      );
    this.refresh();
  }
  refresh() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
