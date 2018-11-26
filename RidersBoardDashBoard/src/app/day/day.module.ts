import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayComponent } from './day.component';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DayComponent,
    EntryComponent
  ],
  exports: [
    DayComponent
  ]
})
export class DayModule { }
