import { Component, OnInit } from '@angular/core';
import { Medico } from '../Models/Medico';
import { MedicoService } from './../services/medico.service'

@Component({
  selector: 'app-perfil-doctor',
  templateUrl: './perfil-doctor.component.html',
  styleUrls: ['./perfil-doctor.component.css']
})
export class PerfilDoctorComponent implements OnInit {

  medico: any ;
 
  constructor(
    private _medicoService: MedicoService
  ) {
    this.getMedico()
  }

  ngOnInit(): void {
  }

  getMedico() {
    this._medicoService.getCurrentDoctorWithClossestConsults().subscribe(
      (resp => {
 
        this.medico = <any>resp.data
        console.log(resp.data)
      }
      ),
      (error => console.log(error))
    )
  }
}
