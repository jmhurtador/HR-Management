import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomHttpService } from './../../shared/custom-http/custom-http.service';
import { Employee } from '../employee.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
} from '@angular/material';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  formGroup: FormGroup;

  displayedColumns: string[] = [
    'id',
    'name',
    'company',
    'age',
    'birthday',
    'favoriteColor',
    'project',
    'edit',
    'delete',
  ];

  dataSource: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  url = 'app/employees';

  constructor(
    private api: CustomHttpService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    this.api.get<Employee[]>(this.url).subscribe((result) => {
      console.log(result);

      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      id: [null],
      name: [
        'Juan Herrera',
        [Validators.min(3), Validators.max(30), Validators.required],
      ],
      company: ['Yuxi Global', [Validators.required]],
      age: [0],
      birthday: ['1991/10/10', [Validators.required]],
      favoriteColor: ['Black', [Validators.required]],
      project: [3, [Validators.required]],
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  add() {
    console.log(this.formGroup.get('id').value);

    const employee: Employee = {
      id: this.formGroup.get('id').value,
      name: this.formGroup.get('name').value,
      company: this.formGroup.get('company').value,
      age: 0,
      birthday: this.formGroup.get('birthday').value,
      favoriteColor: this.formGroup.get('favoriteColor').value,
      project: this.formGroup.get('project').value,
    };

    this.api
      .post(this.url, employee)
      .pipe(switchMap(() => this.api.get<Employee[]>(this.url)))
      .subscribe((result) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    this.formGroup.patchValue({
      id: null,
      name: '',
      company: '',
      age: 0,
      birthday: Date.now(),
      favoriteColor: 'Blue',
      project: '',
    });
  }

  back() {
    this.router.navigate(['home']);
  }

  edit(row) {
    console.log(row.id);
    this.formGroup.patchValue({
      id: row.id,
      name: row.name,
      company: row.company,
      age: row.age,
      birthday: row.birthday,
      favoriteColor: row.favoriteColor,
      project: row.project,
    });
  }

  delete(row) {
    if (
      confirm('Are you sure to delete ' + row.name + ' ?') === true
    ) {
      const deleteUrl = this.url + '/' + row.id;
      console.log(deleteUrl);
      this.api
        .delete<Employee[]>(deleteUrl)
        .pipe(switchMap(() => this.api.get<Employee[]>(this.url)))
        .subscribe((result) => {
          this.dataSource = new MatTableDataSource(result);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      // this.toastr.warning('Deleted Successfully', 'Employees');
    }
  }
}
