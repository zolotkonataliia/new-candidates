import { Component,  EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'add-candidate',
  templateUrl: './add-candidate.component.html'
})
export class AddCandidateComponent {
  @Output() addCandidateEvent = new EventEmitter();

  public isCollapsed:boolean = false;

  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }

  addCandidate(name: string, lastName: string, status: string, workplace: string, recruiter: string): void {
    let newCandidate = {name : name, lastName: lastName, status: status, workplace : workplace, recruiter : recruiter};
    this.addCandidateEvent.emit(newCandidate);
 }
}
