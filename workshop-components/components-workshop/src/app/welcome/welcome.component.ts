import { Component } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  constructor(private userService: UserService, private router: Router){}
  get isLoggedIn(): boolean {
    return this.userService.isLogged
  }

}
