import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArticleComponent} from './article/article.component';

import {ArticlesComponent} from './articles/articles.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent,ArticlesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Article Site';
}
