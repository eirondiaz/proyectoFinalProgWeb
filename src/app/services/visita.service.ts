import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  URL:string = 'https://n7pec0.deta.dev/consulta'

  constructor(private http: HttpClient) { }

  createVisita(data) {
    return this.http.post<any>(this.URL + '/create?token=' + localStorage.getItem('token'), data)
  }

  getAllVisitas() {
    return this.http.get<any>(this.URL + '/?token=' + localStorage.getItem('token'))
  }


  getVisitaById(id) {
    return this.http.get<any>(this.URL + '/' + id)
  }

  updateVisita(id, data) {
    return this.http.get<any>(this.URL + '/' + id, data)
  }

  deleteVisita(id) {
    return this.http.get<any>(this.URL + '/' + id)
  }
}
