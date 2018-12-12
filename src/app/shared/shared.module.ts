import { CommonModule } from '@angular/common';
import { DateToAgePipe } from './pipe/date-to-age.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DateToAgePipe],
  imports: [CommonModule],
  exports: [DateToAgePipe],
})
export class SharedModule {}
