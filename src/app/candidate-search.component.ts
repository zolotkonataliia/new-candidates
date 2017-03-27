import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Candidate } from './candidate';
import { CandidateService } from './candidate.service';
import { CandidateSearchService } from './candidate-search.service';

@Component({
    selector: 'candidate-search',
    templateUrl: './candidate-search.component.html',
    styleUrls: [ './candidate-search.component.css' ]
})

export class CandidateSearchComponent implements OnInit {
    candidates: Observable<Candidate[]>;
    private searchTerms = new Subject<string>();
    constructor(
      private candidateSearchService: CandidateSearchService,
      private router: Router) {}

    search(term: string): void {
      this.searchTerms.next(term);
    }
    ngOnInit(): void {
      this.candidates = this.searchTerms
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => term
          ? this.candidateSearchService.search(term)
          : Observable.of<Candidate[]>([]))
        .catch(error => {
          // TODO: add real error handling
          console.log(error);
          return Observable.of<Candidate[]>([]);
        });
    }
    gotoDetail(candidate: Candidate): void {
      let link = ['/detail', candidate.id];
      this.router.navigate(link);
    }
  }
