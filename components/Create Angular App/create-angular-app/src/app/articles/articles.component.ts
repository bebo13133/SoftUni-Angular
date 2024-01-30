import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { ArticleData } from '../data/data';
// import { Article} from '../models/article.models';
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
