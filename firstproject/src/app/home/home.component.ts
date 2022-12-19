import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myArray: string[] = ['Jack', 'Jill', 'Jane', 'John'];

  constructor() { }

  ngOnInit(): void {
    console.log(document);
  }

}
