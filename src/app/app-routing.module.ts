import { EmployeesComponent } from './employees/employees/employees.component';
import { HomeComponent } from './home/home/home.component';
import { HttpNotFoundComponent } from './core/http-not-found/http-not-found.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
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
  { path: '**', component: HttpNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
