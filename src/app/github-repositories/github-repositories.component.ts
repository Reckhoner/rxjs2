import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { of, Subject, Observable } from 'rxjs';
import { RepositorySearchResponse } from '../shared/models/repository-search-response.interface';
import { map, filter, distinctUntilChanged, switchMap, debounceTime } from 'rxjs/operators';

const GITHUB_URL = 'http://api.github.com/search/repositories';

@Component({
  selector: 'app-github-repositories',
  templateUrl: './github-repositories.component.html',
  styleUrls: ['./github-repositories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubRepositoriesComponent implements OnInit {
  queries$ = new Subject<string>(); 
  searchResult$: Observable<RepositorySearchResponse>

  constructor(private http: HttpClient) {
    this.searchResult$ = of({});
   }

  ngOnInit(): void {
    this.searchResult$ = this.queries$.pipe(
      map((query: string) => query ? query.trim() : ''),
      filter<string>(Boolean),
      debounceTime(500),
      distinctUntilChanged<string>(),
      switchMap((query: string) => this.fetchRepository(query))
    );
  }

  onTextChange(query: string) {
    // this.searchResult$ = this.fetchRepository(query);
    this.queries$.next(query);
  }

  private fetchRepository(query: string): Observable<RepositorySearchResponse> {
    const params = {q: query};
    return this.http.get<RepositorySearchResponse>(GITHUB_URL, {params});
  }

}
