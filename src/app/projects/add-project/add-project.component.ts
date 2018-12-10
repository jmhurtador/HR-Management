import { Component, OnInit } from '@angular/core';
import { CustomHttpService } from './../../shared/custom-http/custom-http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../project.interface';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  formGroup: FormGroup;

  url = 'app/projects';

  constructor(
    private api: CustomHttpService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [
        'DieHard',
        [Validators.required],
        Validators.min(3),
        Validators.max(30),
      ],
      clientName: ['Brainshark', [Validators.required]],
    });
  }

  onSubmit() {
    const project: Project = {
      id: 0,
      name: this.formGroup.get('name').value,
      teamSize: 0,
      clientName: this.formGroup.get('clientName').value,
    };

    this.api
      .post(this.url, project)
      .pipe(switchMap(() => this.api.get<Project[]>(this.url)));
  }
}
