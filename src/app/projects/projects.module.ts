import { CommonModule } from '@angular/common';
import { CustomHttpService } from './../shared/custom-http/custom-http.service';
import { FirebaseProjectsService } from './firebase-projects/firebase-projects.service';
import { MaterialModule } from '../material/material/material.module';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  providers: [CustomHttpService, FirebaseProjectsService],
})
export class ProjectsModule {}
