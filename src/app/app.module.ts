import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeesModule } from './employees/employees.module';
import { ForbiddenComponent } from './errors/forbidden/forbidden.component';
import { HomeModule } from './home/home.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { MockApiService } from './shared/mock-api.service';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './errors/notfound/notfound.component';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [AppComponent, NotfoundComponent, ForbiddenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoginModule,
    HomeModule,
    EmployeesModule,
    ProjectsModule,
    HttpClientInMemoryWebApiModule.forRoot(MockApiService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
