import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  URL:string = 'https://ube4kp.deta.dev/doctor'

  constructor(private http: HttpClient) { }

  updatePassword(data) {
    return this.http.put<any>(this.URL + '/updatePassword?token=' + localStorage.getItem('token'), data)
  }

  updateEmailName(data) {
    return this.http.put<any>(this.URL + '/updateEmailName?token=' + localStorage.getItem('token'), data)
  }
}
