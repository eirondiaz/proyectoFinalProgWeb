import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Paciente } from '../Models/Paciente';
import { Visita } from '../Models/Visita';
import { PacienteService } from '../services/paciente.service';
import { VisitaService } from './../services/visita.service'

@Component({
  selector: 'app-nueva-citas',
  templateUrl: './nueva-citas.component.html',
  styleUrls: ['./nueva-citas.component.css']
})
export class NuevaCitasComponent implements OnInit {
  registroPacienteBoxes: string[] = ['box1', 'box2', 'box3', 'box4', 'box5'];
  @ViewChild('idPac', {static: true}) idPac: ElementRef
  currentBox = 0;
  myForm: FormGroup = this.createForm()
  visita: Visita
  pacientes: Paciente[]
  loading:boolean = true; 

  constructor(
    private _builder: FormBuilder,
    private _pacienteService: PacienteService,
    private _VisitaService: VisitaService
  ) { 
    this.getAllPaciente()
  }

  ngOnInit(): void {
     
  }

  createForm(): FormGroup{
    return this._builder.group({
      id_paciente: [''],
      fecha: ['', Validators.required],
      no_seguro: ['', Validators.required],
      monto: ['', Validators.required],
      motivo: ['', Validators.required],
      diagnostico: ['', Validators.required],
      nota: ['', Validators.required],
      foto_evidencia: ['', Validators.required]
    })
  }

  getAllPaciente() {
    this._pacienteService.getAllPatients().subscribe(
      (resp => {
        this.pacientes = <Paciente[]>resp['data']
        console.log(this.pacientes);
        this.loading = false; 
      }),
      (error => console.log(error))
    )
  }

 
  NextBox() {    
    this.visita = this.myForm.value
    if (this.currentBox == 0) {
     this.visita.id_paciente = this.id_paciente.id
    }   

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

  saveCita(){    
    this.visita.id_paciente = this.id_paciente.id
    console.log(this.visita)
    this._VisitaService.createVisita(this.visita).subscribe(
      (resp => {
        console.log("Visita creada exitosamente")
      }),
      (error => console.log(error))
    )
  }

  firstFormValidation(){
    return this.fecha.valid
  }

  secondFormValidation(){
    return this.no_seguro.valid && this.monto.valid
  }

  threeFormValidation(){
    return this.monto.valid && this.diagnostico.valid && this.nota.valid
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

        fileReader.onload = (FileLoadevent) => {
            let srcData = FileLoadevent.target.result  
            this.visita.foto_evidencia = <string> srcData    
        }
        fileReader.readAsDataURL(file)
    }
    this.NextBox();
  }

  get fecha () {return this.myForm.get('fecha')}
  get no_seguro () {return this.myForm.get('no_seguro')}
  get monto () {return this.myForm.get('monto')}
  get motivo () {return this.myForm.get('motivo')}
  get diagnostico () {return this.myForm.get('diagnostico')}
  get nota () {return this.myForm.get('nota')}
  get foto_evidencia () {return this.myForm.get('foto_evidencia')}
  get id_paciente () {    
    return {
      id:  this.idPac.nativeElement.value,
      nombre:  this.idPac.nativeElement.options[this.idPac.nativeElement.selectedIndex].text
    }  
  }
}
