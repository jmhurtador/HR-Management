import { CommonModule, DatePipe } from '@angular/common';
import { CustomHttpService } from './../shared/custom-http/custom-http.service';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { MaterialModule } from './../material/material/material.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    EmployeesRoutingModule,
  ],
  providers: [CustomHttpService, DatePipe],
})
export class EmployeesModule {}
