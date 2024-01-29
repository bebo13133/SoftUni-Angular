import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  title ='hide'
  toggle =false;
  activeUsers = [{name:"martin", age:16},{name:"bobi", age:41},{name:"Kalin", age:15}]
  navigationClickMe (){
this.toggle = !this.toggle  
}
}
