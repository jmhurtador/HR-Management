import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeMenuComponent } from './home/home-menu/home-menu.component';
import { NgModule } from '@angular/core';
import { VerticalMenuComponent } from './home/vertical-menu/vertical-menu.component';
import {
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatCardModule,
} from '@angular/material';

@NgModule({
  declarations: [
    HomeComponent,
    VerticalMenuComponent,
    HomeMenuComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
  ],
})
export class HomeModule {}
