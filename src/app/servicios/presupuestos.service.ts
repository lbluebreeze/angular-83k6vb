import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PresupuestosService {

  presupuestosUrl = "https://angular-daisy.firebaseio.com/";

  constructor(private http: Http) { }

  postPresupuesto(presupuesto: any) {
    const newpresupuesto = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.presupuestosUrl, newpresupuesto, {headers}).map(response => {
      console.log(response.json());
      return response.json();
    });
  }

}