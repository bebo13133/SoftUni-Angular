import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UsersListComponent} from './users-list/users-list.component'
import { User } from './Type/User';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';

  constructor() {
    setInterval(() =>{

      this.users.push({
        name: 'Demo',
        age: 21
      })
      console.log('Demo is added')
    },5000)
  }
  users: User [] = [{ name: 'John', age: 21 }, { name: 'Huicho', age: 61 }, { name: 'Atanas', age: 77 }, { name: 'Peter', age: 32 }]

  addUser (inputName:HTMLInputElement, inputAge:HTMLInputElement){
    const user = {
      name: inputName.value,
      age: +inputAge.value
    }
    this.users= [...this.users, user];
    inputName.value="";
    inputAge.value="";
  }
}
