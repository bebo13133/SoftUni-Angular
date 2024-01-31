import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component'
import { User } from './Type/User';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[UserService]
})
export class AppComponent {
  title = 'angular-app';

  constructor(public userService: UserService) {

  }



}
const o = new Observable((observe)=>{
  observe.next(1000)
  observe.next(2000)
  observe.next(3000)
  observe.next(2000)
  observe.next(4000)
})
o.subscribe(data =>{
  console.log('data observer',data)
})