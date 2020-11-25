import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { HomeComponent } from './home/home.component';
import { ListadoCitasComponent } from './listado-citas/listado-citas.component';
import { ListadoPacienteComponent } from './listado-paciente/listado-paciente.component';
import { LoginComponent } from './login/login.component';
import { NuevoPacienteComponent } from './nuevo-paciente/nuevo-paciente.component';
import { PasswordConfigComponent } from './password-config/password-config.component';
import { PerfilDoctorComponent } from './perfil-doctor/perfil-doctor.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [{path: '', component: LoginComponent},
                        {path: 'registro', component: RegistroComponent},
                        {path: 'cuenta', component: HomeComponent,
                        children: [
                          {path: '', component: ListadoPacienteComponent},
                          {path : 'perfil' , component : PerfilDoctorComponent},
                          {path : 'configuracion' , component : ConfiguracionComponent},
                          {path: 'password', component: PasswordConfigComponent},
                          {path: 'nuevo-paciente', component: NuevoPacienteComponent},
                           {path: 'listado-citas', component: ListadoCitasComponent }]}
                         ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
