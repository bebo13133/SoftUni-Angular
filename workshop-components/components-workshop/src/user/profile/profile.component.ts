import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from '../../app/shared/constants';
import { appEmailValidator } from '../../app/shared/validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    ext: [''],
    tel: [''],

  })

  get user() {
    const { username, email, tel: telephone } = this.userService.user!;
    // const [ext, ...tel] = telephone.split(' ');
    return {
      username,
      email,
      // tel: tel.join(' '),
      // ext,
    }
  }
  constructor(private fb: FormBuilder, private userService: UserService) {

  }

  ngOnInit(): void {

  }
}
