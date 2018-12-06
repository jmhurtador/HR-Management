import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ProjectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class ProjectsRoutingModule {}
