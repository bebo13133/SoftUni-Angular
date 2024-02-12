import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-theme',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterLink],
  templateUrl: './new-theme.component.html',
  styleUrl: './new-theme.component.css'
})
export class NewThemeComponent {


  newThemeHandler(form:NgForm): void{
if(form.invalid) return;
console.log(form.value)
  }
}
