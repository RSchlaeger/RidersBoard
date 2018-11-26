import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input() hour :number;
  constructor() { }

  ngOnInit() {
    this.hour = this.hour + 7;
  }

}
