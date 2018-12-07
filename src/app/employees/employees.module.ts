import { CommonModule } from '@angular/common';
import { CustomHttpService } from './../shared/custom-http/custom-http.service';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [CommonModule, EmployeesRoutingModule],
  providers: [CustomHttpService],
})
export class EmployeesModule {}
