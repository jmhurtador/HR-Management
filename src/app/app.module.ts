import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { EmployeesModule } from './employees/employees.module';
import { HomeModule } from './home/home.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { MockApiService } from './shared/mock-api.service';
import { NgModule } from '@angular/core';
import { ProjectsModule } from './projects/projects.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    LoginModule,
    HomeModule,
    EmployeesModule,
    ProjectsModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(MockApiService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
