import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpNotFoundComponent } from './http-not-found/http-not-found.component';
import { HttpForbiddenComponent } from './http-forbidden/http-forbidden.component';

@NgModule({
  declarations: [HttpNotFoundComponent, HttpForbiddenComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
