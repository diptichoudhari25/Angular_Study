import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() public Myevent = new EventEmitter();
  
  public SendMessage(data : any)
  {
    this.Myevent.emit(data);
  }
}