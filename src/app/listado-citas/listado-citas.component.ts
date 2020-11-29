import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Visita } from '../Models/Visita';
import { VisitaService } from '../services/visita.service';

@Component({
  selector: 'app-listado-citas',
  templateUrl: './listado-citas.component.html',
  styleUrls: ['./listado-citas.component.css']
})
export class ListadoCitasComponent implements OnInit {
  fechaGroup:FormGroup; 
  listaVicitas:Visita[] = [] ; 
  listaVicitasFiltrada: Visita[];
  

  constructor(
    private _servicoVicitas: VisitaService
  ) { }

  ngOnInit(): void {
    this.fechaGroup = new FormGroup({
      fecha : new FormControl('') 
   })
   this.getAllVicitas();
  }


  getAllVicitas(){
    this._servicoVicitas.getAllVisitas().subscribe( res => {
      this.listaVicitas = res.data;
      this.listaVicitasFiltrada = this.listaVicitas;
    })
 }
 

 FetchVicitasPorFecha(date: any) {
  this.listaVicitasFiltrada = this.listaVicitas.filter(x => x.fecha.substring(0, 10) == date.fecha)
  console.log(this.listaVicitasFiltrada)
  }

 
}
