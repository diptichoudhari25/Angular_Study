import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApplication4';

  public Name1:string = "Marvellous Infosystems";
  public Name2:string = "Marvellous Infosystems";

  public GetDataLower()
  {
    return this.Name1 = this.Name1.toLowerCase();
  }
  public GetDataUpper()
  {
  return this.Name2=this.Name2.toUpperCase();
  }

}
