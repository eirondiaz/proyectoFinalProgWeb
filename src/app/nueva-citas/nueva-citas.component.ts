import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nueva-citas',
  templateUrl: './nueva-citas.component.html',
  styleUrls: ['./nueva-citas.component.css']
})
export class NuevaCitasComponent implements OnInit {
  registroPacienteBoxes: string[] = ['box1', 'box2', 'box3', 'box4'];
  currentBox = 0;

  constructor() { }

  ngOnInit(): void {
     
  }


 

  NextBox() { 
    let activeBox = document.getElementById(this.registroPacienteBoxes[this.currentBox]);
    let nextBox = document.getElementById(this.registroPacienteBoxes[this.currentBox + 1]);

    activeBox.classList.add('d-none')
    nextBox.classList.remove('d-none');
    this.currentBox += 1;
  }

  PreviusBox() {
    let activeBox = document.getElementById(this.registroPacienteBoxes[this.currentBox]);
    let preBox = document.getElementById(this.registroPacienteBoxes[this.currentBox - 1]);
    
    if (this.currentBox == this.registroPacienteBoxes.length -1 ){
        let firstbox =  document.getElementById(this.registroPacienteBoxes[0]);

        activeBox.classList.add('d-none')
        firstbox.classList.remove('d-none');
        this.currentBox = 0; 
        
      } else {
          activeBox.classList.add('d-none')
          preBox.classList.remove('d-none');
          this.currentBox -= 1;
    }
  }
}
