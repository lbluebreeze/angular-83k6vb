import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PresupuestosService } from '../../servicios/presupuestos.service';

@Component({
  selector: 'app-editpresupuesto',
  templateUrl: './editpresupuesto.component.html',
  styleUrls: ['./editpresupuesto.component.css']
})
export class EditpresupuestoComponent implements OnInit {

  presupuestoForm: FormGroup;
  presupuesto: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;
  id: string;

  constructor(private pf: FormBuilder, private presupuestosService: PresupuestosService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(parametros => {
      this.id = parametros['id'];
      this.presupuestosService.getPresupuesto(this.id).subscribe(presupuesto => this.presupuesto = presupuesto);
    });
  }

  ngOnInit() {
    this.presupuestoForm = this.pf.group({
      proveedor: ['', Validators.required],
      fecha: ['', Validators.required],
      concepto: ['', [Validators.required, Validators.minLength(10)]],
      base: ['', Validators.required],
      tipo: ['', Validators.required],
      iva: this.iva,
      total: this.total,
    });
    this.onChanges();
  }

  onChanges(): void {
    this.presupuestoForm.valueChanges.subscribe(valor => {
      this.base = valor.base;
      this.tipo = valor.tipo;
      let iva = this.base * this.tipo;
      this.presupuestoForm.value.iva = iva;
      this.presupuestoForm.value.total = this.base + iva;
    });
  }

  onSubmit() {
    this.presupuesto = this.savePresupuesto();
    this.presupuestosService.putPresupuesto(this.presupuesto, this.id).subscribe(newpresupuesto => {
      this.router.navigate(['/presupuestos']);
    });
    this.presupuestoForm.reset();
  }

  savePresupuesto() {
    const savePresupuesto = {
      proveedor: this.presupuestoForm.get('proveedor').value,
      fecha: this.presupuestoForm.get('fecha').value,
      concepto: this.presupuestoForm.get('concepto').value,
      base: this.presupuestoForm.get('base').value,
      tipo: this.presupuestoForm.get('tipo').value,
      iva: this.presupuestoForm.get('iva').value,
      total: this.presupuestoForm.get('total').value,
    }
    return savePresupuesto;
  }

}