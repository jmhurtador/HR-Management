import { AuthenticationService } from './authentication/authentication.service';
import { CommonModule } from '@angular/common';
import { HttpForbiddenComponent } from './http-forbidden/http-forbidden.component';
import { HttpNotFoundComponent } from './http-not-found/http-not-found.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HttpNotFoundComponent, HttpForbiddenComponent],
  imports: [CommonModule],
  providers: [AuthenticationService],
})
export class CoreModule {}
