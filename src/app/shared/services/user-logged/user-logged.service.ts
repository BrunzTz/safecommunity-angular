import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {

  public name: string = 'Não Indentificado'

  constructor() { }

  disconnect(){
    this.name = 'Não Indentificado';
  }

}
