import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeMenuComponent } from './home/home-menu/home-menu.component';
import { MaterialModule } from './../material/material/material.module';
import { NgModule } from '@angular/core';
import { VerticalMenuComponent } from './home/vertical-menu/vertical-menu.component';

@NgModule({
  declarations: [
    HomeComponent,
    VerticalMenuComponent,
    HomeMenuComponent,
  ],
  imports: [CommonModule, MaterialModule],
})
export class HomeModule {}
