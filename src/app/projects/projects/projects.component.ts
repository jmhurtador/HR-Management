import { ApiService } from './../../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  url = 'app/projects';

  projects$: Observable<Projects>;

  constructor(private api: ApiService) {
    this.projects$ = api.getData<Projects>(this.url);
  }

  ngOnInit() {}
}
