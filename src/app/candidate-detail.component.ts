import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }  from '@angular/common';

import { Candidate } from './candidate';
import { CandidateService } from './candidate.service';

@Component({
  selector: 'candidate-detail',
  templateUrl: './candidate-detail.component.html'
})
export class CandidateDetailComponent implements OnInit {
  candidate: Candidate;

  constructor(
    private candidateService: CandidateService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.candidateService.getCandidate(+params['id']))
      .subscribe(candidate => this.candidate = candidate);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.candidateService.update(this.candidate)
      .then(() => this.goBack());
  }
}
