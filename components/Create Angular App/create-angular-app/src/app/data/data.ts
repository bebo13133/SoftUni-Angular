import { Article } from "../models/article.models";
import { data } from '../data/seed'

export class ArticleData {
    getData(): Article[] {
        let articles: Article[] = []

        data.forEach(article => {
            articles.push(new Article(article.title, article.description, article.author, article.imageUrl))
        });
        return articles;
    }
}