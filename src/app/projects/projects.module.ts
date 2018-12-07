import { CommonModule } from '@angular/common';
import { CustomHttpService } from './../shared/custom-http/custom-http.service';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule],
  providers: [CustomHttpService],
})
export class ProjectsModule {}
