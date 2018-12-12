import { CommonModule, DatePipe } from '@angular/common';
import { CustomHttpService } from './../shared/custom-http/custom-http.service';
import { EmployeesComponent } from './employees/employees.component';
import { MaterialModule } from './../material/material/material.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [CustomHttpService, DatePipe],
})
export class EmployeesModule {}
