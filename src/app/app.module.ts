import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { ListadoPacienteComponent } from './listado-paciente/listado-paciente.component';
import { PerfilDoctorComponent } from './perfil-doctor/perfil-doctor.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { PasswordConfigComponent } from './password-config/password-config.component';
import { NuevoPacienteComponent } from './nuevo-paciente/nuevo-paciente.component';
import { NuevaCitasComponent } from './nueva-citas/nueva-citas.component';
import { ListadoCitasComponent } from './listado-citas/listado-citas.component';
import { PacienteService } from './services/paciente.service';
import { PacienteDetalleComponent } from './paciente-detalle/paciente-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    ListadoPacienteComponent,
    PerfilDoctorComponent,
    ConfiguracionComponent,
    PasswordConfigComponent,
    NuevoPacienteComponent,
    NuevaCitasComponent,
    ListadoCitasComponent,
    PacienteDetalleComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
