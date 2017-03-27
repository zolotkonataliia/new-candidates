import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let candidates = [
      {id: 11, name: 'Nataliia', lastName: 'Zolotko', status: 'approved', workplace: 'front-end', recruiter: 'Magdalena Nowak'},
      {id: 12, name: 'Max', lastName: 'Doe', status: 'new', workplace: '.NET', recruiter: 'Magdalena Nowak'},
      {id: 13, name: 'Lilija', lastName: 'Zelenkova', status: 'new', workplace: 'PHP', recruiter: 'Philip Moris'},
      {id: 14, name: 'Alex', lastName: 'Flex', status: 'approved', workplace: '.NET', recruiter: 'Magdalena Nowak'},
      {id: 15, name: 'Met', lastName: 'Bennet', status: 'new', workplace: 'front-end', recruiter: 'Jakub Jakub'},
      {id: 16, name: 'Person', lastName: 'Person', status: 'new', workplace: 'PHP', recruiter: 'Philip Moris'},
      {id: 17, name: 'New Person', lastName: 'Person Lastname', status: 'approved', workplace: 'front-end', recruiter: 'Magdalena Nowak'},
      {id: 18, name: 'New Person', lastName: 'Lastname', status: 'approved', workplace: 'front-end', recruiter: 'Magdalena Nowak'},
      {id: 19, name: 'New Person', lastName: 'Lastname', status: 'approved', workplace: 'PHP', recruiter: 'Magdalena Nowak'},
      {id: 20, name: 'New Person', lastName: 'Lastname', status: 'approved', workplace: '.NET', recruiter: 'Magdalena Nowak'},
      {id: 21, name: 'New Person', lastName: 'Lastname', status: 'approved', workplace: 'PHP', recruiter: 'Magdalena Nowak'}
    ];
    return {candidates};
  }
}
