import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Candidate } from './candidate';
import { CandidateService } from './candidate.service';

@Component({
  selector: 'my-candidates',
  templateUrl: './candidates.component.html'
})
export class CandidatesComponent implements OnInit {
  candidates: Candidate[];
  selectedCandidate: Candidate;
  candidatesStatuses = [];

  constructor(
    private router: Router,
    private candidateService: CandidateService) { }

  // get candidates from candidatesService
  getCandidates(): void {
    this.candidateService.getCandidates().then(candidates => this.candidates = candidates);
   }

  ngOnInit(): void {
    this.getCandidates();
  }

  // init selected candidate
  onSelect(candidate: Candidate): void {
    this.selectedCandidate = candidate;
  }

  // navigate to the candidate detail page
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCandidate.id]);
  }


  // add new candidate
  add(newCandidate): void {
    if (!newCandidate) { return; }
    this.candidateService.create(newCandidate)
      .then(candidate => {
        this.candidates.push(candidate);
        this.selectedCandidate = null;
      });
  }

  // delete candidate
  delete(candidate: Candidate): void {
    this.candidateService
      .delete(candidate.id)
      .then(() => {
        this.candidates = this.candidates.filter(c => c !== candidate);
        if (this.selectedCandidate === candidate) { this.selectedCandidate = null; }
      });
  }
}
