import { Component, OnInit } from '@angular/core';
import { MedicoService } from './../services/medico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _medicoService: MedicoService
  ) { }

  ngOnInit(): void {
  }

  getMedico(){
    //this._medicoService.
  }
}
