import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../Models/Paciente';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-paciente-detalle',
  templateUrl: './paciente-detalle.component.html',
  styleUrls: ['./paciente-detalle.component.css']
})
export class PacienteDetalleComponent implements OnInit {

  paciente:any; 
  loading:boolean = true; 
  constructor(
    private ruate: ActivatedRoute,
    private router: Router, 
    private servicePaciente: PacienteService
  ) { }

  ngOnInit(): void {
     this.GetPaciente(); 
  }


  GetPaciente(){
     this.ruate.paramMap.subscribe(res => {
        this.servicePaciente.getPatientById(res.get('id')).subscribe(patient => {
            console.log(patient);
            this.paciente = patient.data; 
            this.loading = false; 
        } )
     })
  }

  

  EliminarPaciente(id:any){
      this.servicePaciente.deletePatient(id).subscribe(res => {
          console.log(res);
          this.router.navigate(['/cuenta']);
      });
  }


}
