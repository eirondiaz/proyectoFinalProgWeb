import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MedicoService } from './../services/medico.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  tienefoto:boolean = false; 
  valid: Boolean
  allPais: any [] = []
  srcDataImg:string ; 
  @ViewChild('pais', {static: true}) pais: ElementRef

  myForm: FormGroup = this._builder.group({
    nombre: ['', Validators.required],
    profesion: ['', Validators.required],
  })
  
  constructor(
    private _builder: FormBuilder,
    private _medicoService: MedicoService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getPais()
  }

  createPatient(){
    this.valid = true

    if (!this.myForm.valid) return

    let e = this.myForm.value

    let data = {      
      profesion: e.profesion,
      pais: this.pais.nativeElement.options[this.pais.nativeElement.selectedIndex].text
    }
   
    this._medicoService.updateProfesionAndContry(data).subscribe(
      (resp => {
        this._router.navigate(['/cuenta/perfil'])
      }),
      (error => {
        console.log(error)
      })
    )
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


   LoadImage(){
       let file = document.getElementById('fileImg');
       file.click();
   } 



   saveFoto(e) {
    /* Nota: actualizar los datod de la db desde aqui*/
    let fileSelect = e.target.files
    let file;
    if(fileSelect.length > 0){
        file = fileSelect[0]
        let fileReader = new FileReader()

        fileReader.onload = (FileLoadevent) => {
            this.SendToDb(FileLoadevent.target.result);       
        }
        fileReader.readAsDataURL(file)
    }
  }

  SendToDb(src){
     // enviar a la base de datos 
  }


  get nombre () {return this.myForm.get('nombre')}
  get profesion () {return this.myForm.get('profesion')}

}
