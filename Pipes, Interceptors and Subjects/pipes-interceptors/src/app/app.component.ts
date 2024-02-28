import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReducePipe } from './reduce.pipe';
import { interval, map } from 'rxjs';
import { UserService } from './user.service';


import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, ReducePipe,HttpClientModule,],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
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
constructor (private userService: UserService){}
  ngOnInit(): void {
    this.userService.loadUsers().subscribe(users =>{
      next:console.log(users)
    })
  }
}
