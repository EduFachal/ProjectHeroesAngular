import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [ LoginComponent, RegisterComponent],
  imports: [
    //Importar el routing para que angular detecte las rutas a redirigir y tener, IMPORTANTE
    // Sino se escribe el modulo del routing no se redirige
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
