import { Component,Input, OnInit  } from '@angular/core';
import { Article } from '../models/article.models';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  private symbols: number = 250;

  @Input() article!: Article;
  @Input() articleDesc!: string;
  descToShow: string = '';
  articleDescLength: number = 0;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = 'Show Image';

  readMore(): void {
    this.articleDescLength = this.symbols;

    if (this.articleDescLength < this.articleDesc.length) {
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
      this.descToShow = this.articleDesc.substring(0, this.articleDescLength);
    } else {
      this.descToShow = this.articleDesc.substring(0, this.articleDescLength);
    }
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;

    this.imageButtonTitle =
      this.imageButtonTitle == 'Show Image' ? 'Hide Image' : 'Show Image';
  }

  hideDesc(): void {
    this.descToShow = '';
    this.articleDescLength = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }
}
