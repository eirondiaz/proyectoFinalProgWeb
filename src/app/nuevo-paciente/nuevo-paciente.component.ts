import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.css']
})
export class NuevoPacienteComponent implements OnInit {
  showSelectAlergia:boolean = true; 
  registroPacienteBoxes:string[] = ['box1', 'box2', 'box3', 'box4'];
  currentBox = 0; 

  constructor() { }

  ngOnInit(): void {
  }

  CambiarBox(e){
     if(e.target.value == "Otros"){
         this.showSelectAlergia = false; 
     }
  }

  NextBox(){
    let activeBox = document.getElementById(this.registroPacienteBoxes[this.currentBox]); 
    let nextBox = document.getElementById(this.registroPacienteBoxes[this.currentBox + 1]);

    activeBox.classList.add('d-none')
    nextBox.classList.remove('d-none');
    this.currentBox += 1;  
  }

  PreviusBox(){
    let activeBox = document.getElementById(this.registroPacienteBoxes[this.currentBox]); 
    let preBox = document.getElementById(this.registroPacienteBoxes[this.currentBox - 1]);
    

    activeBox.classList.add('d-none')
    preBox.classList.remove('d-none');
    this.currentBox -= 1; 
  }

  saveFoto(e){
    console.log(e.target.value)
    
     this.NextBox(); 
  }

}
