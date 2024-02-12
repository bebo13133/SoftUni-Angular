import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { sameValueGroupValidator } from '../../app/shared/validators/same-value-group-validtors';
import { CommonModule, JsonPipe } from '@angular/common';
import { appEmailValidator } from '../../app/shared/validators';
import { DEFAULT_EMAIL_DOMAINS } from '../../app/shared/constants';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe,CommonModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',

})
export class RegisterComponent {

  form = this.fb.group({
  username:['',[Validators.required]],
  email:['',[Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
  ext:[''],
  tel:[''],
  pass:this.fb.group({
    password:['',[Validators.required, Validators.minLength(5)]],
    rePassword:[''],
  },{
    validators:[sameValueGroupValidator('password', 'rePassword') ]
  })

  })


  constructor(private fb:FormBuilder){}

}
