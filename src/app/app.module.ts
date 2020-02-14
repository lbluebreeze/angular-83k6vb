import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

import { ProveedoresService } from "./servicios/proveedores.service";
import { PresupuestosService } from './servicios/presupuestos.service';

import { InicioComponent } from "./inicio/inicio.component";
import { HeaderComponent } from './header/header.component';
import { ProveedoresComponent } from "./proveedores/proveedores.component";
import { AddproveedorComponent } from './proveedores/addproveedor/addproveedor.component';
import { AddpresupuestoComponent } from './presupuestos/addpresupuesto/addpresupuesto.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresupuestoComponent } from './presupuestos/editpresupuesto/editpresupuesto.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { HtmlPipe } from './pipes/html.pipe';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "proveedores", component: ProveedoresComponent },
  { path: "addproveedor", component: AddproveedorComponent },
  { path: "presupuestos", component: PresupuestosComponent },
  { path: "addpresupuesto", component: AddpresupuestoComponent },
  { path: "editpresupuesto/:id", component: EditpresupuestoComponent },
  { path: "registro", component: RegistroComponent },
  { path: "**", component: InicioComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), ReactiveFormsModule, HttpModule],
  declarations: [AppComponent, InicioComponent, ProveedoresComponent, HeaderComponent, AddproveedorComponent, AddpresupuestoComponent, PresupuestosComponent, EditpresupuestoComponent, RegistroComponent, HtmlPipe],
  bootstrap: [AppComponent],
  providers: [ProveedoresService, PresupuestosService, AutenticacionService]
})
export class AppModule {}
