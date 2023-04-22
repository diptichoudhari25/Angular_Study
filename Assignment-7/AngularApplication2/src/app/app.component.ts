import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApplication2';

  public Name:string = "Marvellous Infosystems";

  public fun()
  {
    return this.Name;
  }
}
