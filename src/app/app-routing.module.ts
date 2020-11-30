import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { HomeComponent } from './home/home.component';
import { ListadoCitasComponent } from './listado-citas/listado-citas.component';
import { ListadoPacienteComponent } from './listado-paciente/listado-paciente.component';
import { LoginComponent } from './login/login.component';
import { NuevaCitasComponent } from './nueva-citas/nueva-citas.component';
import { NuevoPacienteComponent } from './nuevo-paciente/nuevo-paciente.component';
import { PacienteDetalleComponent } from './paciente-detalle/paciente-detalle.component';
import { PasswordConfigComponent } from './password-config/password-config.component';
import { PerfilDoctorComponent } from './perfil-doctor/perfil-doctor.component';
import { RegistroComponent } from './registro/registro.component';
import { LoggedInGuard} from './guard/logged-in.guard';
import { CitaDetallesComponent } from './cita-detalles/cita-detalles.component';

const routes: Routes = [{path: '', component: LoginComponent},
                        {path: 'registro', component: RegistroComponent},
                        {path: 'cuenta', component: HomeComponent,  canActivate: [LoggedInGuard],
                        children: [
                          {path: '', component: ListadoPacienteComponent,canActivate:[LoggedInGuard]},
                          {path : 'perfil' , component : PerfilDoctorComponent,canActivate:[LoggedInGuard]},
                          {path : 'configuracion' , component : ConfiguracionComponent,canActivate:[LoggedInGuard]},
                          {path: 'password', component: PasswordConfigComponent,canActivate:[LoggedInGuard]},
                          {path: 'nuevo-paciente', component: NuevoPacienteComponent,canActivate:[LoggedInGuard]},
                          {path: 'listado-citas', component: ListadoCitasComponent ,canActivate:[LoggedInGuard]},
                          {path: 'nueva-cita', component: NuevaCitasComponent ,canActivate:[LoggedInGuard]},
                          { path: 'paciente-detalle/:id', component: PacienteDetalleComponent, canActivate: [LoggedInGuard]},
                          { path: 'cita-detalles/:id', component: CitaDetallesComponent , canActivate: [LoggedInGuard]}
                        ]
                      }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
