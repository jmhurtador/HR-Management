import { AuthenticationGuard } from './core/guard/authentication.guard';
import { EmployeesComponent } from './employees/employees/employees.component';
import { HomeComponent } from './home/home/home.component';
import { HttpForbiddenComponent } from './core/http-forbidden/http-forbidden.component';
import { HttpNotFoundComponent } from './core/http-not-found/http-not-found.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects/projects.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [AuthenticationGuard],
    // loadChildren: './employees/employees.module#EmployeesModule',
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [AuthenticationGuard],
    // loadChildren:
    //   './projects/projects/projects.module#ProjectsModule',
  },
  { path: 'forbidden', component: HttpForbiddenComponent },
  { path: '**', component: HttpNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
