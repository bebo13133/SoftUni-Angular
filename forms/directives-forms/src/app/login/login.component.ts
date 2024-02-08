import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MaxCountDirective } from '../max-count.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,MaxCountDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor() { }
  submitHandler(form: NgForm): void {
    if (form.invalid) return; // Спира субмитването 

    const value: { email: string; password: string } = form.value;
    console.log(value.email);
    console.log(value.password);
    form.setValue({
      email: '',
      password: ''
    }) // зачиства формата 


  }
}
