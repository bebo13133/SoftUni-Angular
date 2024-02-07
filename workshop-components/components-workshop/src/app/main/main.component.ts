import { Component } from '@angular/core';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { ThemesListComponent } from '../themes-list/themes-list.component';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [PostsListComponent,ThemesListComponent,WelcomeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
