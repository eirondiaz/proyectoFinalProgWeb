import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
 export class HomeComponent implements OnInit {
  isFiltroOpen:boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }

  OpenFiltro(){
    let filtro = document.getElementById('filtro-container');

    if(filtro.classList.contains('d-none') || filtro.classList.contains('animate__slideOutLeft'))
        filtro.classList.remove('d-none');
        filtro.classList.remove('animate__slideOutRight');
        filtro.classList.add('animate__slideInRight');
        this.isFiltroOpen = true; 
  }

  CloseFiltro(){
    let filtro = document.getElementById('filtro-container');

    if(!filtro.classList.contains('d-none') || filtro.classList.contains('animate__slideIntRight'))
        filtro.classList.remove('animate__slideInRight');
        filtro.classList.add('animate__slideOutRight');
        this.isFiltroOpen = false ;
        setTimeout(() => {
          filtro.classList.add('d-none');
        }, 500);
  }
 
}
