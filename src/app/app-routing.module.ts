import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListadoPacienteComponent } from './listado-paciente/listado-paciente.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [{path: '', component: LoginComponent},
                        {path: 'registro', component: RegistroComponent},
                        {path: 'home', component: HomeComponent,
                        children: [
                          {path: '', component: ListadoPacienteComponent}
                        ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
