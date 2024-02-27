import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReducePipe } from './reduce.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, ReducePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'pipes-interceptors';
  user = {name: "bobi" , age:41, list:[1,2,3,4,5]}
  sum(a:number,b:number):number{
    return a+b
  }

}
