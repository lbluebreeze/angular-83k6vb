import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AutenticacionService } from '../../servicios/autenticacion.service';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent implements OnInit {
  loginForm: FormGroup;
  userdata: any;
  erroresForm = {
    email: '',
    password: '',
  };
  mensajesValidacion = {
    email: {
      required: 'El correo electrónico es obligatorio',
      email: 'Introduzca un correo electrónico válido',
    },
    password: {
      required: 'La contraseña obligatoria',
    }
  };
  mensaje = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private autenticacionService: AutenticacionService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any){
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.erroresForm) {
      this.erroresForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.mensajesValidacion[field];
        for (const key in control.errors) {
          this.erroresForm[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    this.userdata = this.saveUserData();
    this.autenticacionService.inicioSesion(this.userdata);
    setTimeout(() => {
      if (!this.isAuth()) {
        this.mensaje = true;
      }
    }, 2000);
  }

  saveUserData() {
    const saveUserData = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
    return saveUserData;
  }

  isAuth() {
    return this.autenticacionService.isAuthenticated();
  }

}