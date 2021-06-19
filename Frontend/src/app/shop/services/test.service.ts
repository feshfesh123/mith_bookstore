import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  get(){
    return 'tai';
  }

  constructor() { }
}
