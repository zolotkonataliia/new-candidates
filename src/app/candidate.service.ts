import { Candidate } from './candidate';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CandidateService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private candidatesUrl = 'api/candidates';

  constructor(private http: Http) { }

  // get candidates from API
  getCandidates(): Promise<Candidate[]> {
    return this.http.get(this.candidatesUrl)
      .toPromise()
      .then(response => response.json().data as Candidate[])
  .catch(this.handleError);
  }

  // get candidate by id
  getCandidate(id: number): Promise<Candidate> {
    const url = `${this.candidatesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Candidate)
  .catch(this.handleError);
  }

  // update candidate data
  update(candidate: Candidate): Promise<Candidate> {
    const url = `${this.candidatesUrl}/${candidate.id}`;
    return this.http
      .put(url, JSON.stringify(candidate), {headers: this.headers})
      .toPromise()
      .then(() => candidate)
      .catch(this.handleError);
  }

  // create new candidate
  create(newCandidate): Promise<Candidate> {
    return this.http
      .post(this.candidatesUrl, JSON.stringify({name: newCandidate.name, lastName: newCandidate.lastName, status: newCandidate.status, workplace: newCandidate.workplace, recruiter: newCandidate.recruiter}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Candidate)
  .catch(this.handleError);
  }

  // delete selected candidate
  delete(id: number): Promise<void> {
    const url = `${this.candidatesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
