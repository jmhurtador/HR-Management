import { AddProjectComponent } from './add-project/add-project.component';
import { CommonModule } from '@angular/common';
import { CustomHttpService } from './../shared/custom-http/custom-http.service';
import { FirebaseProjectsService } from './firebase-projects/firebase-projects.service';
import { MaterialModule } from '../material/material/material.module';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectsComponent, AddProjectComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ProjectsRoutingModule,
  ],
  providers: [CustomHttpService, FirebaseProjectsService],
})
export class ProjectsModule {}
