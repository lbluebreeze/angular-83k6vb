import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ProveedoresComponent } from "./proveedores/proveedores.component";
import { InicioComponent } from "./inicio/inicio.component";

import { ProveedoresService } from "./servicios/proveedores.service";
import { HeaderComponent } from './header/header.component';
import { AddproveedorComponent } from './proveedores/addproveedor/addproveedor.component';
import { AddpresupuestoComponent } from './proveedores/addpresupuesto/addpresupuesto.component';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "proveedores", component: ProveedoresComponent },
  { path: "addproveedor", component: AddproveedorComponent },
  { path: "addpresupuesto", component: AddpresupuestoComponent },
  { path: "**", component: InicioComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), ReactiveFormsModule],
  declarations: [AppComponent, ProveedoresComponent, InicioComponent, HeaderComponent, AddproveedorComponent, AddpresupuestoComponent],
  bootstrap: [AppComponent],
  providers: [ProveedoresService]
})
export class AppModule {}
