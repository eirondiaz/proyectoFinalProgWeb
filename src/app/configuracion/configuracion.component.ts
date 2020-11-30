import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms'
import { MedicoService } from './../services/medico.service'
import { Router } from '@angular/router'
import { DomSanitizer } from '@angular/platform-browser';
import { Medico } from '../Models/Medico';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  doctor:Medico; 
  tienefoto:boolean = false; 
  
  nombreControl:FormControl;
  apellidoControl:FormControl; 
  correoControl:FormControl; 

  valid: Boolean
  allPais: any [] = []
  srcDataImg:string ; 

  myForm: FormGroup; 

  constructor(
    private _builder: FormBuilder,
    private _medicoService: MedicoService,
    private _router: Router
  ) { }

 async ngOnInit(){
     await this.crearCampos();
     await this.createForm(); 
}

async crearCampos(){
  this.nombreControl = new FormControl('', Validators.required);
  this.apellidoControl =  new FormControl('', Validators.required);
  this.correoControl =  new FormControl('', [Validators.email, Validators.required]);
}

 async createForm(){
     this.myForm = this._builder.group({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      correo : this.correoControl
    })

    await this.loadDatos(); 
}

async loadDatos(){
    this._medicoService.getMedico().subscribe(medico => {
      this.doctor = medico.data ;
      this.loadDatosOnFields();     
      console.log(this.doctor)
    })
}


loadDatosOnFields(){
   this.nombreControl.setValue(this.doctor.nombre); 
   this.apellidoControl.setValue(this.doctor.apellido);
   this.correoControl.setValue(this.doctor.correo); 
   console.log(this.doctor.apellido);
}


UpdateDoctor(data:any){
    this._medicoService.updateDoctor(data).subscribe( data => {
       this._router.navigate(['/cuenta/perfil']);
   })
}

 
   LoadImage(){
       let file = document.getElementById('fileImg');
       file.click();
   } 


   saveFoto(e:any) {
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

  SendToDb(src:any){
      this._medicoService.updateFoto({foto : src}).subscribe(data => {
         //this._router.navigate(['/cuenta/configuracion'])
         this.doctor.foto = src  ;
         console.log(data);
      })
  }
}



