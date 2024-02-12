import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { sameValueGroupValidator } from '../../app/shared/validators/same-value-group-validtors';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  form = this.fb.group({
  username:[],
  email:[],
  ext:[],
  tel:[],
  pass:this.fb.group({
    password:[],
    rePassword:[],
  },{
    validators:[sameValueGroupValidator('password', 'rePassword') ]
  })

  })


  constructor(private fb:FormBuilder){}

}
