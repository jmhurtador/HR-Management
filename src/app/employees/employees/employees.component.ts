import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomHttpService } from './../../shared/custom-http/custom-http.service';
import { DatePipe } from '@angular/common';
import { Employee } from '../employee.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from './../../projects/project.interface';
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
  urlProjects = 'app/projects';
  projects: Project[];

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

    this.api.get<Project[]>(this.urlProjects).subscribe((result) => {
      console.log(result);
      this.projects = result;
    });
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

  private calculateAge(birthday: Date) {
    const now = new Date();
    const born = new Date(birthday);
    const years = Math.floor(
      (now.getTime() - born.getTime()) / (365 * 24 * 60 * 60 * 1000),
    );
    return years;
  }

  add() {
    console.log(this.formGroup.get('id').value);
    // const projectIndex = this.projects.findIndex(
    //   (p) => p.id === this.formGroup.get('project').value,
    // );
    // this.projects[projectIndex].teamSize++;

    // this.api
    //   .post(this.urlProjects, this.projects[projectIndex])
    //   .pipe(
    //     switchMap(() => this.api.get<Project[]>(this.urlProjects)),
    //   )
    //   .subscribe((resultupdated) => {});

    const employee: Employee = {
      id: this.formGroup.get('id').value,
      name: this.formGroup.get('name').value,
      company: this.formGroup.get('company').value,
      age: this.calculateAge(
        new Date(this.formGroup.get('birthday').value),
      ),
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

    this.formGroup.reset({
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
      birthday: new Date(row.birthday).toISOString(),
      favoriteColor: row.favoriteColor,
      project: row.project,
    });
  }

  delete(row) {
    if (
      confirm('Are you sure to delete ' + row.name + ' ?') === true
    ) {
      // const projectIndex = this.projects.findIndex(
      //   (p) => p.id === row.project,
      // );
      // this.projects[projectIndex].teamSize--;

      // this.api
      //   .post(this.urlProjects, this.projects[projectIndex])
      //   .pipe(
      //     switchMap(() => this.api.get<Project[]>(this.urlProjects)),
      //   )
      //   .subscribe((resultupdated) => {});

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
