import { Component } from '@angular/core';
import { IPerson, people } from '../../../module/IPerson';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterService } from '../../../module/filter.service';

@Component({
  selector: 'MyProject-tabletouilib',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabletouilib.component.html',
  styleUrl: './tabletouilib.component.css',
})
export class TabletouilibComponent {
  persons: IPerson[] = [];
  filteredPersons: IPerson[] = [];
  firstNameFilter: string = '';
  lastNameFilter: string = '';
  emailFilter: string = '';
  tablesData: number[] = Array.from({ length: 2 }, (_, index) => index + 1);

  constructor(private filterService: FilterService) {
    this.persons = people;
    this.filteredPersons = [...this.persons];
  }

  getHeaderColor(index: number): string[] {
    if (index === 0) {
      return ['#ffffff', '#000']; // White text with black background for i = 0
    } else if (index === 1) {
      return ['#000', '#B7DFE2']; // Black text with default background for i = 1
    } else {
      return ['#000', '#ffffff']; // Black text with white background for other indices
    }
  }

  applyFilter(): void {
    this.filteredPersons = this.filterService.filterPersons(
      this.persons,
      this.firstNameFilter,
      this.lastNameFilter,
      this.emailFilter
    );
  }
}
