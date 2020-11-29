import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  URL:string = 'https://n7pec0.deta.dev/patient'

  constructor(private http: HttpClient) { }

  createPatient(data):Observable<any> {
    return this.http.post<any>(this.URL + '/create?token=' + localStorage.getItem('token'), data)
  }

  getAllPatients():Observable<any> {
    return this.http.get<any>(this.URL + '/patients?token=' + localStorage.getItem('token'))
  }

  getPatientById(id):Observable<any> {
    return this.http.get<any>(this.URL + '/' + id)
  }


  updatePatient(id, data):Observable<any> {
    return this.http.put<any>(this.URL + '/' + id, data)
  }

  deletePatient(id):Observable<any> {
    return this.http.delete<any>(this.URL + '/' + id)
  }

  deleteMultiplePatient(listaTodelete:any):Observable<any>{
    return this.http.delete(this.URL + '/deleteMultiple', listaTodelete)
  }
}
