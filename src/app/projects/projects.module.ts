import { ApiService } from './../shared/api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, HttpClientModule, ProjectsRoutingModule],
  providers: [ApiService],
})
export class ProjectsModule {}
