import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { appEmailValidator } from '../../app/shared/validators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

constructor(private userService: UserService, private router:Router) {}
  login(form:NgForm):void {
    console.log('form', form.value);
    if(form.invalid) return;

    this.userService.login()
    this.router.navigate(['/home']);
  }
}
