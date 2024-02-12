import { Injectable } from '@angular/core';
import { User } from '../app/types/user';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_KEY = '[user]'
  user: User | null = {
    username: "Bobi",
    email: "test@test.com",
    tel: '+00359 123123123'

  } as any




  get isLogged(): boolean {
    return !!this.user
  }


  constructor(private router: Router) {
    try {

      const lcUser = localStorage.getItem(this.USER_KEY) || "";
      this.user = JSON.parse(lcUser);
    } catch (err) {
      this.user = null;
    }
  }

  login(): void {
    this.user = {
      email: "bebo@abv.bg",
      firstName: "Bobi",
      username:"Bobi",
      tel: "+00359 123123123",
    }
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }
  logout(): void {
    this.user = null;
    localStorage.removeItem(this.USER_KEY);

  }
}
