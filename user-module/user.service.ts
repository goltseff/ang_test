import {Injectable} from '@angular/core';


interface IUser {
    cell: string;
    dob: string;
    email: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
  }


export class UserService {
    public users: Array<IUser> = [];
    public isloaded = true;

    public getUsers() {
        this.users = [];
        this.isloaded = false;
        this.fillUsers();
    }


    private fillUsers(): void  {
        let seed_str = '';
        if (this.users.length > 0) {
          seed_str = this.users[this.users.length - 1].email;
        }
        this.sendRequest(seed_str).then((user: IUser) => {
          this.users.push(user);
          console.log('зятнули юзера с дняфкой: ' + user.dob);
          if (new Date(user.dob).getFullYear() > 1975 ) {
            this.fillUsers();
          } else {
              this.isloaded = true;
          }
        });
      }

      private sendRequest(seed?: string): Promise<IUser> {
        return fetch(seed ? `https://randomuser.me/api/?seed=${seed}` : 'https://randomuser.me/api/')
                .then((response) => {
                    return  response.json()
                            .then((
                                data: {results: IUser[]}
                            ) => {
                                return data.results[0];
                            });
                });
    }
}
