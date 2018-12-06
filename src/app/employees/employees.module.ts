import { ApiService } from './../shared/api.service';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [CommonModule, HttpClientModule, EmployeesRoutingModule],
  providers: [ApiService],
})
export class EmployeesModule {}
