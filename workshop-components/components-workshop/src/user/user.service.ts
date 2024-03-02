import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../app/types/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  private user$$ = new BehaviorSubject<User | undefined>(undefined)

  public user$ = this.user$$.asObservable();

subscription: Subscription


  USER_KEY = '[user]'
  user: User | undefined = {
    username: "Bobi",
    email: "test@test.com",
    tel: '+00359 123123123'

  } as any




  get isLogged(): boolean {
    return !!this.user
  }


  constructor(private router: Router, private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user
    })


    // try {

    //   const lcUser = localStorage.getItem(this.USER_KEY) || "";
    //   this.user = JSON.parse(lcUser);
    // } catch (err) {
    //   this.user = undefined;
    // }
  }

  login(email: string, password: string) {
    // this.user = {
    //   email.
    //   firstName: "Bobi",
    //   username:"Bobi",
    //   tel: "+00359 123123123",
    // }
    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    return this.http.post<User>('/api/login', { email, password }).pipe(tap((user) => this.user$$.next(user)));
  }

  register(username: string,
    email: string,
    password: string,
    rePassword: string,
    tel: string) {
    return this.http.post<User>('/api/register', {
      username,
      email,
      password,
      rePassword,
      tel,
    })
      .pipe(tap((user) => this.user$$.next(user)))


  }
  logout() {
    // this.user = undefined;
    // localStorage.removeItem(this.USER_KEY);
    return this.http.post<User>('/api/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)))
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
