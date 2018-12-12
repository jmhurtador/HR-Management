import * as _moment from 'moment';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomHttpService } from './../../shared/custom-http/custom-http.service';
import { DatePipe } from '@angular/common';
import { Employee } from '../employee.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
} from '@angular/material';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
// // tslint:disable-next-line:no-duplicate-imports
// import {default as _rollupMoment} from 'moment';

const moment = _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [
    DatePipe,
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: MAT_DATE_LOCALE, useValue: 'es-CO' },

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
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
    public datepipe: DatePipe,
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
  // this.datepipe.transform(
  //   this.formGroup.get('birthday').value,
  //   'yyyy/MM/dd',
  // ),

  createForm() {
    this.formGroup = this.formBuilder.group({
      id: [null],
      name: [
        'Juan Herrera',
        [Validators.min(3), Validators.max(30), Validators.required],
      ],
      company: ['Yuxi Global', [Validators.required]],
      age: [0],
      birthday: [{ '': Date, disabled: true }, [Validators.required]],
      favoriteColor: ['', [Validators.required]],
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
      birthday: '',
      favoriteColor: '',
      project: '',
    });
  }

  back() {
    this.router.navigate(['home']);
  }

  edit(row) {
    // console.log(row.birthday);
    // console.log(this.datepipe.transform(row.birthday, 'yyyy/MM/dd'));

    this.formGroup.patchValue({
      id: row.id,
      name: row.name,
      company: row.company,
      age: row.age,
      birthday: new Date(row.birthday),
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
