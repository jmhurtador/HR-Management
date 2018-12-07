import { Component, OnInit } from '@angular/core';
import { CustomHttpService } from './../../shared/custom-http/custom-http.service';
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

  constructor(private api: CustomHttpService) {
    this.projects$ = api.get<Projects>(this.url);
  }

  ngOnInit() {}
}
