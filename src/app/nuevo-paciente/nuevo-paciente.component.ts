import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.css']
})
export class NuevoPacienteComponent implements OnInit {
  showSelectAlergia:boolean = true; 
  constructor() { }

  ngOnInit(): void {
  }



  CambiarBox(e){
     if(e.target.value == "Otros"){
         this.showSelectAlergia = false; 
     }
  }

}
