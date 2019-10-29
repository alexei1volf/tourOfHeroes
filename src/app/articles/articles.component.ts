import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';
import {Observable, Subject} from 'rxjs';
import {Article} from '../article';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  searchString = "";
  searchStringChange$ = new Subject<string>();
  articles$: Observable<Article[]>;

  constructor(public articlesService: ArticleService) { }

  ngOnInit(): void {
    this.articles$ = this.searchStringChange$.pipe(
      switchMap(string => {
        return this.articlesService.searchArticles(string);
      })
    )
  }

  onSearchStringChange(searchString: string) {
    if (searchString && searchString != "") {
      this.searchStringChange$.next(searchString);
    }
  }
}
