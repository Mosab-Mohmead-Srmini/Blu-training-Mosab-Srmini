// filter.service.ts
import { Injectable } from '@angular/core';
import { IPerson } from './IPerson';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterPersons(persons: IPerson[], firstNameFilter: string, lastNameFilter: string, emailFilter: string): IPerson[] {
    let filteredList = [...persons];
    if (firstNameFilter) {
      filteredList = filteredList.filter(person => person.firstname.toLowerCase().includes(firstNameFilter.toLowerCase()));
    }
    if (lastNameFilter) {
      filteredList = filteredList.filter(person => person.lastname.toLowerCase().includes(lastNameFilter.toLowerCase()));
    }
    if (emailFilter) {
      filteredList = filteredList.filter(person => person.email.toLowerCase().includes(emailFilter.toLowerCase()));
    }
    return filteredList;
  }
}
