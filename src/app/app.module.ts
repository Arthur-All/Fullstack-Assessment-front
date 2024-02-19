import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeelistComponent } from './Components/employeelist/employeelist.component';
import { EmployeeModel } from './Models/EmployeeModel';
import { EmployeelistItemComponent } from './Components/employeelist/employeelist-item/employeelist-item.component';
import { EmployeeFullNamePipe } from './Components/employeelist/employee-full-name.pipe';
import { EmployeeDetailsDialogComponent } from './Components/employeelist/employee-details-dialog/employee-details-dialog.component';
import { CreateEmployeeDialogComponent } from './Components/employeelist/create-employee-dialog/create-employee-dialog.component';
import { FormsModule } from '@angular/forms';
import { EmployeeDeleteDialogComponent } from './Components/employeelist/employee-delete-dialog/employee-delete-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeelistItemComponent,
    EmployeeFullNamePipe,
    EmployeeDetailsDialogComponent,
    CreateEmployeeDialogComponent,
    EmployeeDeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [EmployeeModel],
  bootstrap: [AppComponent],
})
export class AppModule {}
