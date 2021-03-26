import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { RepositorySearchResponse } from '../shared/models/repository-search-response.interface';

const GITHUB_URL = 'http://api.github.com/search/repositories';

@Component({
  selector: 'app-github-repositories',
  templateUrl: './github-repositories.component.html',
  styleUrls: ['./github-repositories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubRepositoriesComponent implements OnInit {

  searchResult$: Observable<RepositorySearchResponse>

  constructor(private http: HttpClient) {
    this.searchResult$ = of({});
   }

  ngOnInit(): void {
  }

  onTextChange(query: string) {
    this.searchResult$ = this.fetchRepository(query);
  }

  private fetchRepository(query: string): Observable<RepositorySearchResponse> {
    const params = {q: query};
    return this.http.get<RepositorySearchResponse>(GITHUB_URL, {params});
  }

}
