import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() public Myevent = new EventEmitter();
  @Input() public MessageFromParent = "";


  public MsgChildToParent : string ="Hello from Child";
  public SendMessage()
  {
    this.Myevent.emit(this.MsgChildToParent);
  }
}
