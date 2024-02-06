import { Injectable } from '@angular/core';
import { User } from '../app/types/user';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_KEY = '[user]'
  user: User | undefined;

  get isLogged(): boolean {
    return !!this.user
  }


  constructor(private router: Router) {
    try {

      const lcUser = localStorage.getItem(this.USER_KEY) || "";
      this.user = JSON.parse(lcUser);
    } catch (err) {
      this.user = undefined;
    }
  }

  login(): void {
    this.user = {
      email: "bebo@abv.bg",
      firstName: "Bobi",
    }
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }
  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);

  }
}
