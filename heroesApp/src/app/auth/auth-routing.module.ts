import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

// Lazy Load para vincular las rutas hijas de auth a su padre en el app-routing
const routes : Routes = [
  {
    path: '',
    // Al hacer el routing de estos componentes, al estar dentro de la misma carpeta, se considera
    //  como hijos de la otra carpeta que en este caso son hijos de auth
    children:[
      // Ruta del login
      {
        path:'login',
        component:LoginComponent
      },
      // Ruta del registro
      {
        path:'register',
        component:RegisterComponent
      },
      // Ruta en caso de no detectar alguna de las anteriores para redirigir al login
      {
        path:'**',
        redirectTo:'login'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  // Importar y exportar el RouterModule para que funcionen las rutas, IMPORTANTE
  // forChild para las rutas que son hijas de auth
  imports: [
    RouterModule.forChild (routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
