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

    return this.http.post(`${this.presupuestosUrl}.json`, newpresupuesto, {headers}).map(response => {
      return response.json();
    });
  }

  getPresupuestos() {
    return this.http.get(`${this.presupuestosUrl}.json`).map(response => response.json());
  }

  getPresupuesto(id$: string) {
    return this.http.get(`${this.presupuestosUrl}/${id$}.json`).map(response => response.json());
  }

  putPresupuesto(presupuesto: any, id$: string)  {
    const newpresupuesto = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.put(`${this.presupuestosUrl}/${id$}.json`, newpresupuesto, {headers}).map(response => {
      console.log(response.json());
      return response.json();
    });
  }

  delPresupuesto(id$: string) {
    return this.http.delete(`${this.presupuestosUrl}/${id$}.json`).map(response => response.json());
  }

}