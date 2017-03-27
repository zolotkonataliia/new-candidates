import { Component, OnInit } from '@angular/core';

import { Candidate } from './candidate';
import { CandidateService } from './candidate.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  candidates: Candidate[] = [];

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.candidateService.getCandidates()
      .then(candidates => this.candidates = candidates.slice(1, 5));
  }
}
