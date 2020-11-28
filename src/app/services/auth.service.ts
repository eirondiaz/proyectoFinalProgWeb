import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL:string = 'https://n7pec0.deta.dev/authentication'

  constructor(private http: HttpClient,private router:Router) { }

  registrar(data) {
    return this.http.post<any>(this.URL + '/register', data)
  }

  login(data) {
    return this.http.post<any>(this.URL + '/login', JSON.stringify(data))
  }

  Loggeado(){
    if(localStorage.getItem('token') != null){
      return true
    }
  }
  Logout(){
    if(window.confirm('Desea cerrar la session??')){
      localStorage.removeItem('token')
      this.router.navigate(['/'])
    }
  }
}
