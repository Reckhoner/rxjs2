import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  employees: any[] = [];
  constructor() {
    this.employees = [
      {
        code: '1001',
        name: 'drashti',
        gender: 'Female',
        salary: 55500,
      },
      {
        code: '1002',
        name: 'namrata',
        gender: 'Female',
        salary: 57000,
      },
      {
        code: '1003',
        name: 'shreeja',
        gender: 'Female',
        salary: 59000,
      },
      {
        code: '1004',
        name: 'shreenil',
        gender: 'Male',
        salary: 65000,
      },
    ];
  }

  ngOnInit(): void {}

  getEmployees() {
    this.employees = [
      {
        code: '1001',
        name: 'drashti',
        gender: 'Female',
        salary: 55500,
      },
      {
        code: '1002',
        name: 'namrata',
        gender: 'Female',
        salary: 57000,
      },
      {
        code: '1003',
        name: 'shreeja',
        gender: 'Female',
        salary: 59000,
      },
      {
        code: '1004',
        name: 'shreenil',
        gender: 'Male',
        salary: 65000,
      },
      {
        code: '1005',
        name: 'tejas',
        gender: 'Male',
        salary: 67000,
      },
    ];
  }


  trackByFn(index: number, employee: any) {
    return employee.code
  }
}
