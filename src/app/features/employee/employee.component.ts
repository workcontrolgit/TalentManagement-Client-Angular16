import { Component, OnInit } from '@angular/core';
import { EmployeeListComponent } from './list/employee-list.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  standalone: true,
  imports: [EmployeeListComponent],
})
export class EmployeeComponent implements OnInit {
  active = 1;
  constructor() {}

  ngOnInit() {}
}
