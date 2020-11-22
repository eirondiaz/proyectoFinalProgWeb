import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
 export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OpenMenu(){
    let menu = document.getElementById('menu-container');
    let icon = document.getElementById('close-menu-icon')

    if(menu.classList.contains('d-none') || menu.classList.contains('animate__slideOutLeft'))
        menu.classList.remove('d-none');
        menu.classList.remove('animate__slideOutLeft');
        icon.classList.add('d-none');
        menu.classList.add('animate__slideInLeft');
    
  }

  CloseMenu(){
    let menu = document.getElementById('menu-container');
    let icon = document.getElementById('close-menu-icon');

    if(!menu.classList.contains('d-none') || menu.classList.contains('animate__slideIntLeft'))
        menu.classList.remove('animate__slideInLeft');
        menu.classList.add('animate__slideOutLeft');
        setTimeout(() => {
          menu.classList.add('d-none');
          icon.classList.remove('d-none');
        }, 500);
  }
 
}
