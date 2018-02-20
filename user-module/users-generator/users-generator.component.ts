import { Component } from '@angular/core';
import {UserService} from '../user.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-users-generator',
  templateUrl: './users-generator.component.html',
  styleUrls: ['./users-generator.component.css'],
  providers: [UserService]
})
export class UsersGeneratorComponent  {
  title = 'пока никак';
  users: Array<any> = [];

  constructor(private uservice: UserService) {
  }
  isUsersLoaded() {
      return this.uservice.isloaded;
  }


ClkService() {
  this.users = [];
  this.title = 'посылаем запрос сервису';
  this.uservice.getUsers();
  const sub = Observable.interval(300)
    .subscribe(i => {
      this.title += '.';
      if (this.uservice.isloaded === true) {
        this.users = this.uservice.users;
        sub.unsubscribe();
        this.title = 'прорисовываем ответ';
      }
    });
}

userDel(e: string) {
//  console.log('принял' + e);
  let user_del_index = 0;
  this.users.forEach(function (value, index) {
    if (value.picture.thumbnail === e) { user_del_index = index; }
  });
  this.users.splice(user_del_index, 1);
}

}
