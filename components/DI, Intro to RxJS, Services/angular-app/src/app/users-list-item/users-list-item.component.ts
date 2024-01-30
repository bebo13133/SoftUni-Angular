import { Component, Input } from '@angular/core';
import { User } from '../Type/User';

@Component({
  selector: 'app-users-list-item',
  standalone: true,
  imports: [],
  templateUrl: './users-list-item.component.html',
  styleUrl: './users-list-item.component.css'
})
export class UsersListItemComponent {
@Input() user: User| undefined =undefined
}
