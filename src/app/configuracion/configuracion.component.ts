import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MedicoService } from './../services/medico.service'

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  tienefoto:boolean = false; 
  valid: Boolean
  allPais: any [] = []
  @ViewChild('pais', {static: true}) pais: ElementRef

  myForm: FormGroup = this._builder.group({
    nombre: ['', Validators.required],
    profesion: ['', Validators.required],
  })
  
  constructor(
    private _builder: FormBuilder,
    private _medicoService: MedicoService
  ) { }

  ngOnInit(): void {
    this.getPais()
  }

  createPatient(){
    this.valid = true

    if (!this.myForm.valid) return

    let e = this.myForm.value

    let medico = {
      nombre: e.nombre,
      profesion: e.profesion,
      pais: this.pais.nativeElement.options[this.pais.nativeElement.selectedIndex].text
    }
    console.log(medico)

  }

  getPais(){
    this._medicoService.getPais().subscribe(
      (resp => {
        let all = <[]> resp
        all.forEach(element => {
          this.allPais.push(element['name'])
        });
      })
    )
  }

  get nombre () {return this.myForm.get('nombre')}
  get profesion () {return this.myForm.get('profesion')}

}
