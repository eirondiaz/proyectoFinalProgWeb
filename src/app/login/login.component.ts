import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from './../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup = this._builder.group({
    correo: ['', Validators.compose([Validators.required, Validators.email])],
    clave: ['', Validators.required]
  })
  valid:boolean
  error: string

  constructor(
    private _builder: FormBuilder,
    private _authService: AuthService,
    private _router: Router) { }

  ngOnInit(): void {

  }

  logIn(){
    this.valid = true
    if(!this.myForm.valid) return

    this._authService.login(this.myForm.value).subscribe(
      (resp => {
        if (resp['ok'] == true) {
          localStorage.setItem("token", resp['token'])
          this._router.navigate(['/cuenta'])
        }        
      }),
      (error =>{
        if(error.status == 400 && error['error']['detail'] == "user or email mot found"){         
          this.error = "*Usuario o contraseña incorrectos*"
        } else {
           alert("Ha ocurrido un error, vuelva mas tarde.");
        }
      })
    )
  }

  get correo () {return this.myForm.get('correo')}
  get clave () {return this.myForm.get('clave')}

}
