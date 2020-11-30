import { Component, OnInit } from '@angular/core';
import { Medico } from '../Models/Medico';
import { MedicoService } from './../services/medico.service'

@Component({
  selector: 'app-perfil-doctor',
  templateUrl: './perfil-doctor.component.html',
  styleUrls: ['./perfil-doctor.component.css']
})
export class PerfilDoctorComponent implements OnInit {

<<<<<<< HEAD
  medico: any ;
=======
  medico: any = null
>>>>>>> 49cb8a2a386d78e266251c1bf3c899d8e170c44a

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
<<<<<<< HEAD
        this.medico =  resp.data
        console.log(this.medico)
=======
        this.medico = <any>resp.data
        console.log(resp.data)
>>>>>>> 49cb8a2a386d78e266251c1bf3c899d8e170c44a
      }
      ),
      (error => console.log(error))
    )
  }
}
