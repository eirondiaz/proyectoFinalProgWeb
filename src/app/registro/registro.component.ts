import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'; 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  myForm: FormGroup = this._builder.group({
    nombre: ['', Validators.required ],
    correo: ['', Validators.compose([Validators.required, Validators.email])],
    clave: ['', [Validators.required, Validators.minLength(8)]]
  })

  valid:boolean;

  constructor(
    private _builder:FormBuilder
  ) { }

  ngOnInit(): void {
  }

  register(){
    this.valid = true
    console.log(this.myForm.value)
    console.log("Es el log-in")
  }

  get nombre () {return this.myForm.get('nombre')}
  get correo () {return this.myForm.get('correo')}
  get clave () {return this.myForm.get('clave')}

}
