import { CustomHttpService } from './../../shared/custom-http/custom-http.service';
import { Project } from '../project.interface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { FirebaseProjectsService } from './../firebase-projects/firebase-projects.service';
// import { Observable } from 'rxjs';
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

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
  displayedColumns: string[] = [
    'id',
    'name',
    'teamSize',
    'clientName',
    'edit',
    'delete',
  ];

  editionMode = false;

  dataSource: MatTableDataSource<Project>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  url = 'app/projects';

  constructor(
    private api: CustomHttpService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.api.get<Project[]>(this.url).subscribe((result) => {
      console.log(result);

      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  add() {
    this.router.navigate(['/add']);
  }

  edit(row) {
    this.editionMode = true;
    // this.router.navigate(['/add']);
    // // this.api.put<Project[]>(this.url, row).subscribe((result) => {
    // //   this.dataSource = new MatTableDataSource(result);
    // // });
  }

  delete(row) {
    if (
      confirm('Are you sure to delete ' + row.name + ' ?') === true
    ) {
      this.api.delete<Project[]>(row).subscribe((result) => {
        this.dataSource = new MatTableDataSource(result);
      });
      // this.toastr.warning('Deleted Successfully', 'Projects');
    }
  }

  // onSubmit(value) {
  //   this.firebaseProjectsService
  //     .create(value, this.avatarLink)
  //     .then((res) => {
  //       this.resetFields();
  //       this.router.navigate(['/home']);
  //     });
  // }
}
