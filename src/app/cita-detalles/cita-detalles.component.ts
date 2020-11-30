import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitaService } from '../services/visita.service';

@Component({
  selector: 'app-cita-detalles',
  templateUrl: './cita-detalles.component.html',
  styleUrls: ['./cita-detalles.component.css']
})
export class CitaDetallesComponent implements OnInit {
 
  idCita:string; 
  citaFormulario:FormGroup; 
  motivoControl:FormControl; 
  fechaControl: FormControl;
  numeroSeguroControl:FormControl;
  diagnosticoControl: FormControl;
  notaControl:FormControl;
  montoControl:FormControl; 
  foto:string ; 

  constructor(
     private route: ActivatedRoute,
     private router: Router, 
     private servicioCita: VisitaService,
     private formBuilder: FormBuilder 
  ) { }

  ngOnInit(): void {
      this.motivoControl = new FormControl('', [Validators.required]);
      this.fechaControl = new FormControl('', [Validators.required]);
      this.numeroSeguroControl = new FormControl('', [Validators.required]);
      this.diagnosticoControl = new FormControl('', [Validators.required]);
      this.notaControl = new FormControl('', [Validators.required]);
      this.montoControl = new FormControl('', [Validators.required]);
      
       this.createForm(); 
  }


   createForm(){
       this.citaFormulario = this.formBuilder.group({
         motivo : this.motivoControl,
         no_seguro: this.numeroSeguroControl,
         diagnostico : this.numeroSeguroControl,
         fecha : this.fechaControl,
         nota : this.notaControl,
         monto : this.montoControl,
         foto_evidencia : this.foto
       })

       this.LoadDatosToInputs(); 
   }


  LoadDatosToInputs(){
      this.route.paramMap.subscribe( res =>   {
            this.servicioCita.getVisitaById(res.get('id')).subscribe( cita => {
              this.idCita = cita.data[0].id; 
               this.montoControl.setValue(cita.data[0].monto) ; 
               this.motivoControl.setValue(cita.data[0].motivo) ;
               this.fechaControl.setValue(cita.data[0].fecha) ;
               this.notaControl.setValue(cita.data[0].nota);
               this.diagnosticoControl.setValue(cita.data[0].diagnostico);
               this.numeroSeguroControl.setValue(cita.data[0].no_seguro);
               this.foto = cita.data[0].foto_evidencia; 
               console.log(cita)
            })
      })
  }

  EliminarCita(){
    console.log(this.idCita)
     this.servicioCita.deleteVisita(this.idCita).subscribe( res => {
       this.router.navigate(['/cuenta/listado-citas']); 
     })
  }

  GuardarCambios(data:any){

  }

  ShowFoto(){
    let foto = document.getElementById("foto");
    foto.classList.remove("d-none"); 
  }

  CloseMenu(){
    let foto = document.getElementById("foto");
    foto.classList.add("d-none"); 
  }

  ChangeFoto(e:any){
     this.foto = e.target.value ; 
  }
}
