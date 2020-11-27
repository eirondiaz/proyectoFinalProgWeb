import { Component, OnInit } from '@angular/core';
import { Medico } from '../Models/Medico';
import { MedicoService } from './../services/medico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   medico:Medico; 
   
  constructor(
    private _medicoService: MedicoService
  ) { }

  ngOnInit(): void {
       //this._medicoService.
    this._medicoService.getMedico().subscribe(medico => {
      this.medico = medico.data;
      console.log(this.medico)
  })
  }
 
}
