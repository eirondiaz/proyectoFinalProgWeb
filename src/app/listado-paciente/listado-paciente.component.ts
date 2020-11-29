import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { Router } from '@angular/router';
import { Paciente } from '../Models/Paciente';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-listado-paciente',
  templateUrl: './listado-paciente.component.html',
  styleUrls: ['./listado-paciente.component.css']
})
export class ListadoPacienteComponent implements OnInit {
 
  pacientes: Paciente[]
  listDelete: any[] = []
  verZodiaco:boolean = true;   
  deleteList:string[] = [];
  fehaGroup:FormGroup; 

  loading:boolean = true; 

  @ViewChild('filtro', { static: true }) filtro: ElementRef
  @ViewChild('citaFecha', { static: true }) citaFecha: ElementRef
 
  constructor(
    private _pacienteService: PacienteService,
    private router: Router
  ) { }


 ngOnInit() {
    this.getAllPaciente()
  }

getAllPaciente() {
    this._pacienteService.getAllPatients().subscribe(
      (resp => {
        this.pacientes = <Paciente[]>resp['data']
        console.log(this.pacientes);
        this.loading = false; 
      }),
      (error => console.log(error))
    )
  }

  getZodiaco(fecha) {
    let dia = Number(fecha.substring(8, 10))
    let mes = Number(fecha.substring(5, 7))

    if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4))
      return ('Aries');
    if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10))
      return ('Libra');
    if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5))
      return ('Tauro');
    if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11))
      return ('Escorpio');
    if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6))
      return ('G\u00E9minis');
    if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12))
      return ('Sagitario');
    if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7))
      return ('C\u00E1ncer');
    if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1))
      return ('Capricornio');
    if ((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8))
      return ('Leo');
    if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2))
      return ('Acuario');
    if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9))
      return ('Virgo');
    if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3))
      return ('Piscis');
  }
 

  VerPorCitas(e) {
    if (e.target.value == "citas") {
      this.verZodiaco = false;
    } else {
      this.verZodiaco = true;
    }
  }

   
}
