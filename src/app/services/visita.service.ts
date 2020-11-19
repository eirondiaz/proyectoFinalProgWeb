import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  URL:string = 'http://localhost:8000/consulta'

  constructor(private http: HttpClient) { }

  //arreglarla en el api con respeto al token (mandarlo por la URL) EIRON DEBE HACERLO
  createVisita(data) {
    return this.http.post<any>(this.URL + '/create/' + localStorage.getItem('token'), data)
  }

  //arreglarla en el api con respeto al token (mandarlo por la URL) EIRON DEBE HACERLO
  getAllVisitas() {
    return this.http.get<any>(this.URL + '/' + localStorage.getItem('token'))
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
