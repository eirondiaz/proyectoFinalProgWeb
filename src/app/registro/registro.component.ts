import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  myForm: FormGroup = this._builder.group({
    nombre: ['', Validators.required],
    correo: ['', Validators.compose([Validators.required, Validators.email])],
    clave: ['', [Validators.required, Validators.minLength(8)]]
  })

  valid: boolean;
  error: string

  constructor(
    private _builder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  register() {
    this.valid = true   
    if (!this.myForm.valid) return

    this._authService.registrar(this.myForm.value).subscribe(
      (resp => {
        if (resp['ok'] == true) {
          this._router.navigate([''])
        }
      }),
      (error =>{
        if(error.status == 400 && error['error']['detail'] == "user already registered"){         
          this.error = "*Este usuario ya existe*"
        }
      })
    )
  }

  get nombre() { return this.myForm.get('nombre') }
  get correo() { return this.myForm.get('correo') }
  get clave() { return this.myForm.get('clave') }

}
