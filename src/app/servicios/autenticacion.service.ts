import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AutenticacionService {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  registroUsuario(userdata) {
    firebase.auth().createUserWithEmailAndPassword(userdata.email, userdata.password)
      .catch(error => {
        console.log(error);
      })
    ;
  }

  inicioSesion(userdata) {
    firebase.auth().signInWithEmailAndPassword(userdata.email, userdata.password)
      .then(response => {
        console.log(response);
        this.router.navigate(['/inicio']);
      })
      .catch(error => {
        console.log(error);
      })
    ;
  }

}