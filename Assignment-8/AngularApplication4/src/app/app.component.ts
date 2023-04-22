import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApplication4';

  public stringlength = "";

  CalculateLengthData(value:any)
  {
     this.stringlength=value.target.value.length;
  }
}
