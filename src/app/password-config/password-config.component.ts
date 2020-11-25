import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MedicoService } from './../services/medico.service'
import { validarQueSeanIguales } from './validarPass'
@Component({
  selector: 'app-password-config',
  templateUrl: './password-config.component.html',
  styleUrls: ['./password-config.component.css']
})
export class PasswordConfigComponent implements OnInit {

  myForm: FormGroup = this._builder.group({
    oldClave: ['', Validators.required],
    passwords: this._builder.group({
      newClave: ['', Validators.required],
      confirmClave: ['', Validators.required]
    }, {
      validators: validarQueSeanIguales,
    })
  })

  constructor(
    private _builder: FormBuilder,
    private _medicoService: MedicoService
  ) { }

  ngOnInit(): void {
  }

  updatePassword(){
    let e = this.myForm.value
    console.log(e)
  }

  passwordValid(){
    return this.myForm.get('passwords').invalid && this.newClave.valid && this.confirmClave.valid
  }

  get oldClave () {return this.myForm.get('oldClave')}
  get newClave () {return this.myForm.get('passwords').get('newClave')} 
  get confirmClave () {return this.myForm.get('passwords').get('confirmClave')} 

}
