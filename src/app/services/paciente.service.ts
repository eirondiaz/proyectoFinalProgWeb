import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  URL:string = 'http://localhost:8000/patient'

  constructor(private http: HttpClient) { }

  //arreglarla en el api con respeto al token (mandarlo por la URL) EIRON DEBE HACERLO
  createPatient(data) {
    return this.http.post<any>(this.URL + '/create', data)
  }

  //arreglarla en el api con respeto al token (mandarlo por la URL) EIRON DEBE HACERLO
  getAllPatients() {
    return this.http.get<any>(this.URL + '/patients/' + localStorage.getItem('token'))
  }

  getPatientById(id) {
    return this.http.get<any>(this.URL + '/' + id)
  }

  updatePatient(id, data) {
    return this.http.put<any>(this.URL + '/' + id, data)
  }

  deletePatient(id) {
    return this.http.delete<any>(this.URL + '/' + id)
  }
}
