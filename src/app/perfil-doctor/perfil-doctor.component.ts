import { Component, OnInit } from '@angular/core';
import { Medico } from '../Models/Medico';
import { MedicoService } from './../services/medico.service'

@Component({
  selector: 'app-perfil-doctor',
  templateUrl: './perfil-doctor.component.html',
  styleUrls: ['./perfil-doctor.component.css']
})
export class PerfilDoctorComponent implements OnInit {

  medico: Medico = null

  constructor(
    private _medicoService: MedicoService
  ) {
    this.getMedico()
  }

  ngOnInit(): void {
  }

  getMedico() {
    this._medicoService.getMedico().subscribe(
      (resp => {
        this.medico = <Medico>resp.data
        console.log(resp.data)
      }
      ),
      (error => console.log(error))
    )
  }

}
