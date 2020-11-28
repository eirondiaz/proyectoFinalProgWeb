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

const routes: Routes = [{path: '', component: LoginComponent},
                        {path: 'registro', component: RegistroComponent},
                        {path: 'cuenta', component: HomeComponent,
                        children: [
<<<<<<< HEAD
                          {path: '', component: ListadoPacienteComponent},
                          {path : 'perfil' , component : PerfilDoctorComponent},
                          {path : 'configuracion' , component : ConfiguracionComponent},
                          {path: 'password', component: PasswordConfigComponent},
                          {path: 'nuevo-paciente', component: NuevoPacienteComponent},
                          {path: 'listado-citas', component: ListadoCitasComponent },
                          {path: 'nueva-cita', component: NuevaCitasComponent },
                          {path: 'paciente-detalle/:id', component: PacienteDetalleComponent}]}
=======
                          {path: '', component: ListadoPacienteComponent,canActivate :[LoggedInGuard]},
                          {path : 'perfil' , component : PerfilDoctorComponent,canActivate :[LoggedInGuard]},
                          {path : 'configuracion' , component : ConfiguracionComponent,canActivate :[LoggedInGuard]},
                          {path: 'password', component: PasswordConfigComponent,canActivate :[LoggedInGuard]},
                          {path: 'nuevo-paciente', component: NuevoPacienteComponent,canActivate :[LoggedInGuard]},
                           {path: 'listado-citas', component: ListadoCitasComponent ,canActivate :[LoggedInGuard]},
                          {path: 'paciente-detalle/:id', component: PacienteDetalleComponent,canActivate :[LoggedInGuard]}]}
>>>>>>> b5ad7aa0da1db9fcd91da440ba8deca664b08be0
                         ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
