import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL:string = 'http://localhost:8000/authentication'

  constructor(private http: HttpClient) { }

  registrar(data) {
    return this.http.post<any>(this.URL + '/register', data)
  }

  login(data) {
    return this.http.post<any>(this.URL + '/login', data)
  }

  logOut() {
    localStorage.removeItem('token')
  }
}
