import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL:string = 'https://n7pec0.deta.dev/authentication'

  constructor(private http: HttpClient) { }

  registrar(data) {
    return this.http.post<any>(this.URL + '/register', data)
  }

  login(data) {
    return this.http.post<any>(this.URL + '/login', JSON.stringify(data))
  }

  logOut() {
    localStorage.removeItem('token')
  }
}
