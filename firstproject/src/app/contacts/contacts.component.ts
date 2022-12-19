import { PeopleService } from './../people.service';
import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  people: Person[] = [];

  constructor(private peopleService: PeopleService) {

  }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe({
      next: (result) => {
        this.populateArray(result)

        console.log(result)
      },
      error: (error) => {
        console.log(error.message);
      },
      complete: () => {
        console.log('API call completed');
      }
    });
  }

  populateArray(result: any) {
    result.results.forEach((element: any) => {
      let person = new Person();

      person.firstName = element.name.first;
      person.lastName = element.name.last;
      person.country = element.location.country;

      this.people.push(person);

      // Another way of doing it
      // this.people.push({
      //   firstName: element.name.first,
      //   lastName: element.name.last,
      //   country: element.location.country
      // });
    });
  }

  onDelete(i: any) {
    this.people.splice(i, 1);
  }
}
