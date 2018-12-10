import { AddProjectComponent } from './add-project/add-project.component';
import { AuthenticationGuard } from './../core/guard/authentication.guard';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: ProjectsComponent,
  //   children: [
  //     {
  //       path: 'add',
  //       component: AddProjectComponent,
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class ProjectsRoutingModule {}
