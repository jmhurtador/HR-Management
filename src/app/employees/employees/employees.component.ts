import { Component, OnInit } from '@angular/core';
import { CustomHttpService } from './../../shared/custom-http/custom-http.service';
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

  constructor(private api: CustomHttpService) {
    this.employees$ = api.get<Employees>(this.url);
  }

  ngOnInit() {}
}
