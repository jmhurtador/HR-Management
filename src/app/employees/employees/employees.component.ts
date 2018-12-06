import { ApiService } from './../../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  url = 'app/employees';

  employees$: Observable<Employees>;

  constructor(private api: ApiService) {
    this.employees$ = api.getData<Employees>(this.url);
  }

  ngOnInit() {}
}
