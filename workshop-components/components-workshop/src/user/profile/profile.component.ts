import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from '../../app/shared/constants';
import { appEmailValidator } from '../../app/shared/validators';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';


interface Profile {
  username: string;
  email: string;
  tel: string;
  ext: string;
}
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  isEditMode:boolean = false;

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    ext: [''],
    tel: [''],

  })

  profileDetails : Profile |undefined


  // get user() {
  //   const { username, email, tel: telephone } = this.userService.user!;
  //   // const [ext, ...tel] = telephone.split(' ');
  //   return {
  //     username,
  //     email,
  //     // tel: tel.join(' '),
  //     // ext,
  //   }
  // }


  constructor(private fb: FormBuilder, private userService: UserService) {

  }
  toggleEditMode():void {
    this.isEditMode = !this.isEditMode;
  }
  onEditHandler():void {
    if(this.form.invalid) {return;}
    this.profileDetails = {...this.form.value} as Profile

    console.log(this.form.value)
    this.toggleEditMode()
  };
  ngOnInit(): void {

  }
  
}
