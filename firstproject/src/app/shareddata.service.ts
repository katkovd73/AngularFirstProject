import { Injectable } from '@angular/core';

@Injectable()
export class ShareddataService {
  name: string = '';

  constructor() { }

  setName(newName: string) {
    this.name = newName;
  }

  getName() {
    return this.name;
  }
}
