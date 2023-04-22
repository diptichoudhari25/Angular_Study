import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApplication3';

  public Name:string = "Marvellous Infosystems";

  public GetData()
  {
  return this.Name="Educating for better tomorrow";
  }
}
