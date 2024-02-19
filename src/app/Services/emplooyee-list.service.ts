import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { EmployeeModel } from '../Models/EmployeeModel';

@Injectable({
  providedIn: 'root',
})
export class EmplooyeeListService {
  constructor(private http: HttpClient) {}

  async getEmplooyeeById(employeeId: number) {
    return this.http.get<EmployeeModel[]>(
      `${environment.apiUrl}?id=${employeeId}`,
      {}
    );
  }

  getEmplooyeeList() {
    return this.http.get<EmployeeModel[]>(`${environment.apiUrl}/GET/All`);
  }

  updateEmplooyee(employee: EmployeeModel) {
    return this.http.put<EmployeeModel[]>(
      `${environment.apiUrl}/PUT/Employee`,
      employee,
      {}
    );
  }
  updateEmplooyeeDepartment(employee: EmployeeModel) {
    return this.http.put<EmployeeModel[]>(
      `${environment.apiUrl}/PUT//Department`,
      employee,
      {}
    );
  }
  getderpHisotry(employee: EmployeeModel) {
    console.log(employee.id);
    return this.http.get<EmployeeModel[]>(
      `${environment.apiUrl}?entityName=derpHisotry&id=${employee.id}`,
      {}
    );
  }
  createEmployee(employee: EmployeeModel) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });

    return this.http.post<EmployeeModel[]>(
      '{environment.apiUrl}?entityName=employee',
      employee,
      { headers: headers }
    );
  }

  deleteEmplooyee(employee: EmployeeModel) {
    console.log(employee.id);
    return this.http.delete<EmployeeModel[]>(
      `{environment.apiUrl}?entityName=employee&id=${employee.id}`,
      {}
    );
  }
}
