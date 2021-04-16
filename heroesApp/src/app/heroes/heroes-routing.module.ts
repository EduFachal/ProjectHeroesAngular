import { NgModule } from '@angular/core';
import { ListComponent } from './pages/list/list.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { AddHeroesComponent } from './pages/add-heroes/add-heroes.component';
import { SearchComponent } from './pages/search/search.component';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

// Lazy Load para vincular las rutas hijas de heroes a su padre en el app-routing
const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
    // Al hacer el routing de estos componentes, al estar dentro de la misma carpeta, se considera
    //  como hijos de la otra carpeta que en este caso son hijos de heroes
    children:[
      // Ruta del list
      {
        path:'list',
        component:ListComponent
      },
      // Ruta del addheroe
      {
        path:'add',
        component:AddHeroesComponent
      },
      // Ruta del addheroe para editar
      {
        path:'edit/:id' ,
        component:AddHeroesComponent
      },
      // Ruta del search
      {
        path:'search',
        component:SearchComponent
      },
      // Ruta del heroe
      {
        path:':id',
        component:HeroeComponent
      },
      // Ruta en caso de no detectar alguna de las anteriores para redirigir a list
      {
        path:'**',
        redirectTo:'list'
      }
      // Ruta del heroe
     /* ,{
        path:':id',
        component:HeroeComponent
      }*/
    ]
  }
]

@NgModule({
  declarations: [],
  // Importar y exportar el RouterModule para que funcionen las rutas, IMPORTANTE
  // forChild para las rutas que son hijas de heroes
  imports: [
    RouterModule.forChild (routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingModule { }
