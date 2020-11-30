import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../services/paciente.service';
import { DomSanitizer } from '@angular/platform-browser';

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
    private servicePaciente: PacienteService,
    private domSanitizer: DomSanitizer  
  ) { }

  ngOnInit(): void {
     this.GetPaciente(); 
  }


  GetPaciente(){
     this.ruate.paramMap.subscribe(res => {
        this.servicePaciente.getPatientById(res.get('id')).subscribe(patient => {
            this.paciente = patient.data; 
            this.loading = false; 
        } )
     })
  }
  

  EliminarPaciente(id:any){
      this.servicePaciente.deletePatient(id).subscribe(res => {
          this.router.navigate(['/cuenta']);
      });
  }

  // purifyFoto(){
  //   this.paciente.foto  = this.domSanitizer.bypassSecurityTrustUrl(this.paciente.foto);
  // }


}
