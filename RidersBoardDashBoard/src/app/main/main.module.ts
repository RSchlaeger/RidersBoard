import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayModule } from '../day/day.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    DayModule
  ],
  declarations: [
    MainComponent,
  ]
})
export class MainModule { }
