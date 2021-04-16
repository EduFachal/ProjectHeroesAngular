import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

// Rutas de la app
const routes : Routes = [
  // Routing del padre, auth
  {
    path:'auth',
    // Para cargar las rutas del hijo, importas el modulo del padre
    // .then -> promesa
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  //Routing del padre, heroes
  {
    path:'heroes',
    // Para cargar las rutas del hijo, importas el modulo del padre
    // .then -> promesa
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    // Necesita estar autenticado para poder navegar a las urls de heroe
  //  canLoad: [ AuthGuard ] ,
 //   canActivate: [ AuthGuard ]
  },

  // Ruta de error, pagina 404
  {
    path: '404',
    component : ErrorPageComponent
  },
  //Si alguna pagina no existe te redirigira a la pagina 404
  // ** comodin por si una página no existe
  {
    path: '**',
    redirectTo: '404'
  }
]

@NgModule({
  declarations: [],
  // Importar y exportar el RouterModule para que funcionen las rutas, IMPORTANTE
  // forRoot para las rutas
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
