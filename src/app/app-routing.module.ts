import { EmployeesComponent } from './employees/employees/employees.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './errors/notfound/notfound.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'employees',
    component: EmployeesComponent,
    // loadChildren: './employees/employees.module#EmployeesModule',
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    // loadChildren:
    //   './projects/projects/projects.module#ProjectsModule',
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
