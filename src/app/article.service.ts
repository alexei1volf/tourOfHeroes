import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Article} from './article';
import {map} from 'rxjs/operators';
import {NewsApiResponse} from './news-api-response';

const urlPath = 'https://newsapi.org/v2/everything?language=ru&';
const apiKey = 'apiKey=0f6c7de234634872a1972e7e0bdfb30b';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  searchArticles(query: string): Observable<Article[]> {
    const url = urlPath + 'q=' + query + '&' + apiKey;
    return this.http.get(url)
      .pipe(
        map((response : NewsApiResponse) => response.articles)
      );
  }
}
