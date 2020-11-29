import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Medico } from '../Models/Medico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {


  URL:string = 'https://n7pec0.deta.dev/doctor'


  constructor(private http: HttpClient) { }

  updatePassword(data) {
    return this.http.put<any>(this.URL + '/updatePassword?token=' + localStorage.getItem('token'), data)
  }

  updateEmailName(data) {
    return this.http.put<any>(this.URL + '/updateEmailName?token=' + localStorage.getItem('token'), data)
  }

  updateFoto(data:any) {
    return this.http.put<any>(this.URL + '/updatePhoto?token=' + localStorage.getItem('token'), data)
  }

  getMedico(): Observable<any>{
    return this.http.get<any>(this.URL + '/getCurrentDoctor?token=' + localStorage.getItem('token'))
  }

  getCurrentDoctorWithClossestConsults(){
    return this.http.get<any>(this.URL + '/getCurrentDoctorWithClossetConsults?token=' + localStorage.getItem('token'))
  }

  getPais(){
    return this.http.get("https://restcountries.eu/rest/v2/all")
  }

  updateProfesionAndContry(data){
    return this.http.put<any>(this.URL + '/updateProfesionAndContry?token=' + localStorage.getItem('token'), data)
  }

  updateDoctor(data:any){
    return this.http.put<any>(this.URL + '/update?token=' + localStorage.getItem('token'), data)
  }

}
