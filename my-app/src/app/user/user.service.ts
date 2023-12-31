import { Injectable } from '@angular/core';
import { User } from '../types/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | undefined;
  USER_KEY = '[user]'; //Key is specifically used to store and retrieve the user object in localStorage.

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const localStorageUser = localStorage.getItem(this.USER_KEY) || "";
      this.user = JSON.parse(localStorageUser)
    } catch (error) {
      this.user = undefined;
    }
  }

  login(): void {
    this.user = {
      email: 'peter@abv.bg',
      username: 'Peter',      
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  };
  
  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }

}

