import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { ArticleData } from '../data/data';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  articles = new ArticleData().getData();
}
