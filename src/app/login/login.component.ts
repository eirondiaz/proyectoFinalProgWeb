import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup = this._builder.group({
    correo: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required]
  })

  valid:boolean
  constructor(private _builder: FormBuilder) { }

  ngOnInit(): void {

  }

  logIn(){
    this.valid = true
    console.log(this.myForm.value)
    console.log("Es el log-in")
  }

  get correo () {return this.myForm.get('correo')}
  get password () {return this.myForm.get('password')}

}
