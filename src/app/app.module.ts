import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CollapseModule } from 'ng2-bootstrap';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { CandidateService } from './candidate.service';
import { CandidateSearchService } from './candidate-search.service';
import { DashboardComponent } from './dashboard.component';
import { CandidatesComponent } from './candidates.component';
import { CandidateDetailComponent } from './candidate-detail.component';
import { CandidateSearchComponent } from './candidate-search.component';
import { AddCandidateComponent } from './add-candidate.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CandidatesComponent,
    CandidateDetailComponent,
    CandidateSearchComponent,
    AddCandidateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    CollapseModule.forRoot()
  ],
  providers: [CandidateService, CandidateSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
