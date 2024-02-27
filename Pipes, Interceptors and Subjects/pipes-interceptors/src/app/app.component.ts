import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReducePipe } from './reduce.pipe';
import { interval, map } from 'rxjs';

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
  addProperty():void{
    (this.user as any)["test1"] = 'test1';
    this.user.list = [...this.user.list, 100]
    console.log(this.user)
  }
  date$ = interval (1000).pipe(map(()=> new Date()))
}
