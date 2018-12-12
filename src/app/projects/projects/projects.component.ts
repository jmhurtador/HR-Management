import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomHttpService } from './../../shared/custom-http/custom-http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../project.interface';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
} from '@angular/material';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  formGroup: FormGroup;

  displayedColumns: string[] = [
    'id',
    'name',
    'teamSize',
    'clientName',
    'edit',
    'delete',
  ];

  dataSource: MatTableDataSource<Project>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  url = 'app/projects';

  constructor(
    private api: CustomHttpService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    this.api.get<Project[]>(this.url).subscribe((result) => {
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
        'DieHard II',
        [Validators.min(3), Validators.max(30), Validators.required],
      ],
      teamSize: [0],
      clientName: ['Brainshark', [Validators.required]],
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

    const project: Project = {
      id: this.formGroup.get('id').value,
      name: this.formGroup.get('name').value,
      teamSize: 0,
      clientName: this.formGroup.get('clientName').value,
    };

    this.api
      .post(this.url, project)
      .pipe(switchMap(() => this.api.get<Project[]>(this.url)))
      .subscribe((result) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    this.formGroup.patchValue({
      id: null,
      name: '',
      teamSize: 0,
      clientName: '',
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
      teamSize: row.teamSize,
      clientName: row.clientName,
    });
  }

  delete(row) {
    if (
      confirm('Are you sure to delete ' + row.name + ' ?') === true
    ) {
      const deleteUrl = this.url + '/' + row.id;
      console.log(deleteUrl);
      this.api
        .delete<Project[]>(deleteUrl)
        .pipe(switchMap(() => this.api.get<Project[]>(this.url)))
        .subscribe((result) => {
          this.dataSource = new MatTableDataSource(result);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      // this.toastr.warning('Deleted Successfully', 'Projects');
    }
  }
}
