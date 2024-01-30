import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { User } from '../Type/User';
import { CommonModule } from '@angular/common';
import {UsersListItemComponent} from '../users-list-item/users-list-item.component'
@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UsersListItemComponent,CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
@Input() users: User[]=[]
}
