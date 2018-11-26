import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  // Date is relative to current date
  @Input() date: number; 

  actualDate: Date = new Date();

  constructor() { }

  ngOnInit() {
    this.actualDate.setDate(this.actualDate.getDate() + this.date);
  }
  

}
