import { Injectable } from '@angular/core';
import { USER } from 'src/app/constantes/user';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {

  public user: User = USER;

  constructor() { }

  disconnect(){
    this.resetUser();
  }

  private resetUser(){
    this.user = USER
  }

}
