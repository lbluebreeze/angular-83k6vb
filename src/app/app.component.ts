import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDYmuwrtyM1SutnazHkQnm0KvV5XXXzdWY',
      authDomain: 'angular-daisy.firebaseapp.com',
    });
  }
}
