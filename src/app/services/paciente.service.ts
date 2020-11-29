import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Paciente } from '../Models/Paciente';

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

  getPatientById(id:any):Observable<any> {
    return this.http.get<any>(this.URL + '/' +  id + '?token=' + localStorage.getItem('token'))
  }
 

  updatePatient(id, data):Observable<any> {
    return this.http.put<any>(this.URL + '/' + id, data)
  }

  deletePatient(id:any):Observable<any> {
    return this.http.delete<any>(this.URL + '/' + id + '?token=' + localStorage.getItem('token'))
  }

  deleteMultiplePatient(listaTodelete:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
      
    return this.http.delete(this.URL + '/deleteMultiple/'  + '?token=' + localStorage.getItem('token'),listaTodelete)
  }
}
