import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Visita } from '../Models/Visita';
import { VisitaService } from '../services/visita.service';

@Component({
  selector: 'app-cita-detalles',
  templateUrl: './cita-detalles.component.html',
  styleUrls: ['./cita-detalles.component.css']
})
export class CitaDetallesComponent implements OnInit {

  cita:Visita; 
  constructor(
     private route: ActivatedRoute,
     private servicioCita: VisitaService
  ) { }

  ngOnInit(): void {
     this.GetCita(); 
  }

  GetCita(){
      this.route.paramMap.subscribe( res =>   {
            this.servicioCita.getVisitaById(res.get('id')).subscribe( cita => {
              console.log(cita.data); 
              this.cita = cita.data; 
            })
      })
  }
}
