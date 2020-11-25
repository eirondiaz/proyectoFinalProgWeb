import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  URL:string = 'https://ube4kp.deta.dev/patient'

  constructor(private http: HttpClient) { }

  createPatient(data) {
    return this.http.post<any>(this.URL + '/create?token=' + localStorage.getItem('token'), data)
  }

  getAllPatients() {
    return this.http.get<any>(this.URL + '/patients?token=' + localStorage.getItem('token'))
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
