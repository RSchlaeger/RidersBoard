import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayModule } from '../day/day.module';
import { MainComponent } from './main.component';
import { CardModule } from '../card/card.module';
// import { DragDropModule } from '@angular/cdk/drag-drop';
import { GridsterModule } from 'angular-gridster2'
import { DataService } from './data.service';

@NgModule({
  imports: [
    CommonModule,
    DayModule,
    CardModule,
    GridsterModule
  ],
  declarations: [
    MainComponent,
    DataService
  ]
})
export class MainModule { }
