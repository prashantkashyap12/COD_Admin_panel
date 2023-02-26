import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { environment } from '../environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  main: any = [{ name: 'test', password: '123456' }];
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebase);
    }
    console.log(firebase.apps.length, 'Length');
  }
  getlogin(data: any) {
    console.log(data.value);
  }
}
