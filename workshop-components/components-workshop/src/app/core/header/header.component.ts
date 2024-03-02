import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UserService } from '../../../user/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,
    // RouterModule,
    RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // isLoggedIn:boolean = true;
  constructor(private userService: UserService, private router: Router) { }
  get isLoggedIn(): boolean {
    return this.userService.isLogged
  }
  get username(): string {
    return this.userService.user?.username || ''
  }

  logout(): void {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);

      },
      error: () => {
        this.router.navigate(['/login']);

      },
    });
  }


  
}
