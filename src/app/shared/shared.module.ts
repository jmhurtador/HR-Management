import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateToAgePipe } from './pipe/date-to-age.pipe';

@NgModule({
  declarations: [DateToAgePipe],
  imports: [CommonModule],
})
export class SharedModule {}
