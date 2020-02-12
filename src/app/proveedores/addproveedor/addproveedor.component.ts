import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-addproveedor",
  templateUrl: "./addproveedor.component.html",
  styleUrls: ["./addproveedor.component.css"]
})
export class AddproveedorComponent implements OnInit {
  @ViewChild("formproveedor", { read: false, static: false })
  formproveedor: NgForm;

  proveedor: any;
  provincias: string[] = [
    "Álava",
    "Albacete",
    "Alicante",
    "Almería",
    "Asturias",
    "Ávila",
    "Badajoz",
    "Barcelona",
    "Burgos",
    "Cáceres",
    "Cádiz",
    "Cantabria",
    "Castellón",
    "Ciudad Real",
    "Córdoba",
    "La Coruña",
    "Cuenca",
    "Gerona",
    "Granada",
    "Guadalajara",
    "Guipúzcoa",
    "Huelva",
    "Huesca",
    "IslasBaleares",
    "Jaén",
    "León",
    "Lérida",
    "Lugo",
    "Madrid",
    "Málaga",
    "Murcia",
    "Navarra",
    "Orense",
    "Palencia",
    "Las Palmas",
    "Pontevedra",
    "La Rioja",
    "Salamanca",
    "Segovia",
    "Sevilla",
    "Soria",
    "Tarragona",
    "Santa Cruz de Tenerife",
    "Teruel",
    "Toledo",
    "Valencia",
    "Valladolid",
    "Vizcaya",
    "Zamora",
    "Zaragoza"
  ];

  constructor() {
    this.proveedor = {
      nombre: "",
      cif: "",
      direccion: "",
      cp: "",
      localidad: "",
      provincia: "",
      telefono: null,
      email: "",
      contacto: ""
    };
  }

  ngOnInit() {}

  onSubmit() {
    this.proveedor.nombre = this.formproveedor.value.nombre;
    this.proveedor.cif = this.formproveedor.value.cif;
    this.proveedor.direccion = this.formproveedor.value.direccion;
    this.proveedor.cp = this.formproveedor.value.cp;
    this.proveedor.localidad = this.formproveedor.value.localidad;
    this.proveedor.provincia = this.formproveedor.value.provincia;
    this.proveedor.telefono = this.formproveedor.value.telefono;
    this.proveedor.email = this.formproveedor.value.email;
    this.proveedor.contacto = this.formproveedor.value.contacto;

    this.formproveedor.reset();
  }
}
