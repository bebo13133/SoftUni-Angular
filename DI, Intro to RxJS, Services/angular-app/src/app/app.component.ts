import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component'
import { User } from './Type/User';
import { UserService } from './user.service';
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
