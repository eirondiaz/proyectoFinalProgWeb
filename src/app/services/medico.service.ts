import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  URL:string = 'http://localhost:8000/doctor'

  constructor(private http: HttpClient) { }

  //arreglarla en el api con respeto al token (mandarlo por la URL) EIRON DEBE HACERLO
  updatePassword(data) {
    return this.http.put<any>(this.URL + '/updatePassword/' + localStorage.getItem('token'), data)
  }

  //arreglarla en el api con respeto al token (mandarlo por la URL) EIRON DEBE HACERLO
  updateEmailName(data) {
    return this.http.put<any>(this.URL + '/updateEmailName/' + localStorage.getItem('token'), data)
  }
}
