import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MedicoService } from './../services/medico.service'
import { validarQueSeanIguales } from './validarPass'
import { Router } from '@angular/router'
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
  valid: boolean
  claveIncorrecta: string
  constructor(
    private _builder: FormBuilder,
    private _medicoService: MedicoService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  updatePassword(){
    
    this.valid = true

    if (!this.myForm.valid) return

    let e = this.myForm.value   
    let data = {
      clave: e.oldClave,
      nueva_clave: e.passwords.newClave
    }

    this._medicoService.updatePassword(data).subscribe(
      (resp => {
        this._router.navigate(['/cuenta/perfil'])
      }),
      (error => {
        if(error.status == 401 && error['error']['detail'] == "incorrect password"){         
          this.claveIncorrecta = "*Clave incorrecta*"
        }else{
          // console.log(error)
        }        
      })
    )
  }

  passwordValid(){
    return this.myForm.get('passwords').invalid && this.newClave.valid && this.confirmClave.valid
  }

  get oldClave () {return this.myForm.get('oldClave')}
  get newClave () {return this.myForm.get('passwords').get('newClave')} 
  get confirmClave () {return this.myForm.get('passwords').get('confirmClave')} 

}
