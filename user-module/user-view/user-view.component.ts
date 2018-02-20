import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {

  public showimage = 0;
  constructor() {
    this.showimage = 1;
  }
  @Input() user: any;
  @Output('userDel') userDel = new EventEmitter();

  userDelClk(p_userid: string) {
    // console.log(p_userid);
    this.userDel.emit(p_userid);
  }
  changeImage() {
    this.showimage++;
    if (this.showimage === 4) {this.showimage = 1; }
  }
}

