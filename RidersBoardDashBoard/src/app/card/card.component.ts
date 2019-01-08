import { Component, OnInit, Input } from '@angular/core';
import { CardType } from '../enums/card-type';
import { TouchSequence } from 'selenium-webdriver';
import { TimeService } from './timer.service';
import { TimeModel } from '../models/time.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() type: CardType;
  @Input() header: string = "header";
  @Input() content?: any;

  constructor(private timer: TimeService) {

  }

  ngOnInit() {
    if (this.type === CardType.Clock) {
      console.log("clocks")
      this.timer.getCurrentTime("Tokio", "Japan").subscribe((res: TimeModel) => {
        console.log("huhu");
        console.log(res);
        this.content = res.dateTime;
      });
    }

  }


}
