import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Candidate } from './candidate';

@Injectable()
export class CandidateSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Candidate[]> {
    return this.http
      .get(`app/candidates/?name=${term}`)
  .map(response => response.json().data as Candidate[]);
  }
}
