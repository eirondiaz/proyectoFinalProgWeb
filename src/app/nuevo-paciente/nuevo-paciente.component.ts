import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Paciente } from '../Models/Paciente';
import { PacienteService } from './../services/paciente.service'

// Holamundo
@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.css']
})
export class NuevoPacienteComponent implements OnInit {
  showSelectAlergia: boolean = true;
  registroPacienteBoxes: string[] = ['box1', 'box2', 'box3', 'box4'];
  currentBox = 0;
  paciente: Paciente
  @ViewChild('rbt1', {static: true}) rbt1 : ElementRef
  @ViewChild('rbt2', {static: true}) rbt2 : ElementRef
  @ViewChild('sangre', {static: true}) sangre : ElementRef
  @ViewChild('alergia', {static: false}) alergia : ElementRef
 
  myForm: FormGroup = this._builder.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    fecha_nac: ['', Validators.required],
    sexo: [''],
    email: ['', [Validators.required, Validators.email]],
    cedula: ['', Validators.required],
    tipo_sangre: ['', Validators.required],
    alergias: ['', Validators.required],
    foto: ['']
  })

  constructor(
    private _pacienteService: PacienteService,
    private _builder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
     
  }

  CambiarBox(e) {
    if (e.target.value == "Otros") {
      this.showSelectAlergia = false;
    }
  }

  NextBox() {
    this.paciente = this.myForm.value
    this.paciente.sexo = this.getSexo()
    this.paciente.tipo_sangre = this.getSangre()
    this.paciente.alergias = this.getAlergias()
 
    let activeBox = document.getElementById(this.registroPacienteBoxes[this.currentBox]);
    let nextBox = document.getElementById(this.registroPacienteBoxes[this.currentBox + 1]);

    activeBox.classList.add('d-none')
    nextBox.classList.remove('d-none');
    this.currentBox += 1;
  }

  PreviusBox() {
    let activeBox = document.getElementById(this.registroPacienteBoxes[this.currentBox]);
    let preBox = document.getElementById(this.registroPacienteBoxes[this.currentBox - 1]);
    
    if (this.currentBox == this.registroPacienteBoxes.length -1 ){
        let firstbox =  document.getElementById(this.registroPacienteBoxes[0]);

        activeBox.classList.add('d-none')
        firstbox.classList.remove('d-none');
        this.currentBox = 0; 
        
      } else {
          activeBox.classList.add('d-none')
          preBox.classList.remove('d-none');
          this.currentBox -= 1;
    }
  }

  LoadImg(){
     let file = document.getElementById('fileImg');
     file.click();
  }

  saveFoto(e) {
    let fileSelect = e.target.files
    let file;
    if(fileSelect.length > 0){
        file = fileSelect[0]
        let fileReader = new FileReader()

        fileReader.onload = function (FileLoadevent) {
            let srcData = FileLoadevent.target.result  
            localStorage.setItem("imagen", JSON.stringify(srcData))        
        }
        fileReader.readAsDataURL(file)
    }

    this.NextBox();
  }

  get nombre () { return this.myForm.get('nombre') }
  get apellido () { return this.myForm.get('apellido') }
  get fecha_nac () { return this.myForm.get('fecha_nac') }
  get email () { return this.myForm.get('email') }
  get cedula () { return this.myForm.get('cedula') }
  getSexo(){ return this.rbt1.nativeElement.checked ? "hombre" : "mujer" }
  getSangre(){ return this.sangre.nativeElement.value }
  getAlergias(){ 
    return this.showSelectAlergia ? this.alergia.nativeElement.options[this.alergia.nativeElement.selectedIndex].text : this.alergia.nativeElement.value
  }

  firstFormValidation(){
    return this.nombre.valid && this.apellido.valid && this.fecha_nac.valid
  }

  secondFormValidation(){
    return this.email.valid && this.cedula.valid
  }

  createPatient(){
    this.paciente.foto = localStorage.getItem('imagen')
 
    this._pacienteService.createPatient(this.paciente).subscribe(
      (resp => {
        console.log("Paciente guardado exitosamente")
        this.router.navigate(['/cuenta']);
      }),
      (error => console.log(error))
    )
  }
  
}
