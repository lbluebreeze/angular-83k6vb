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
import { AddpresupuestoComponent } from './proveedores/addpresupuesto/addpresupuesto.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "proveedores", component: ProveedoresComponent },
  { path: "addproveedor", component: AddproveedorComponent },
  { path: "addpresupuesto", component: AddpresupuestoComponent },
  { path: "presupuestos", component: PresupuestosComponent },
  { path: "**", component: InicioComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), ReactiveFormsModule, HttpModule],
  declarations: [AppComponent, InicioComponent, ProveedoresComponent, HeaderComponent, AddproveedorComponent, AddpresupuestoComponent, PresupuestosComponent],
  bootstrap: [AppComponent],
  providers: [ProveedoresService, PresupuestosService]
})
export class AppModule {}
