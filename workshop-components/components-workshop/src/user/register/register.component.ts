import { Component } from '@angular/core';
import { FormBuilder, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { sameValueGroupValidator } from '../../app/shared/validators/same-value-group-validtors';
import { CommonModule, JsonPipe } from '@angular/common';
import { appEmailValidator } from '../../app/shared/validators';
import { DEFAULT_EMAIL_DOMAINS } from '../../app/shared/constants';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',

})
export class RegisterComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    ext: [''],
    tel: [''],
    passGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: [''],
    }, {
      validators: [sameValueGroupValidator('password', 'rePassword')]
    })

  })


  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }
  register(): void {
    if (this.form.invalid) {
      return;
    }

    const {
      username,
      email,
      passGroup: { password, rePassword } = {},
      tel,
    } = this.form.value;

    this.userService
      .register(username!, email!, password!, rePassword!, tel!)
      .subscribe(() => {
        this.router.navigate(['/themes']);
      });
  }
}
