import { Component, OnInit } from '@angular/core';
// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Card } from '../models/card.model';
import { CardType } from '../enums/card-type';
import { GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { MainService } from './main.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  today: Date = new Date();

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  cards: Card[] = [];

  constructor(private mainService: MainService) { }

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      itemChangeCallback: MainComponent.itemChange,
      itemResizeCallback: MainComponent.itemResize,
      gridType: GridType.Fit,
      draggable: {
        enabled: true
      }
    };

    this.dashboard = this.mainService.getLayout();
    this.cards = this.mainService.getCardData();


  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push();
  }



}
