import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RidersBoardDashBoard';

  constructor(private _router : Router) {}
  ngOnInit(){
    this._router.navigate(['main']);
  }
}
