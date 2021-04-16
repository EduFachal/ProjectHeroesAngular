import { NgModule } from '@angular/core';
import { AddHeroesComponent } from './pages/add-heroes/add-heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './pipes/image.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [AddHeroesComponent, HeroeComponent, HomeComponent, ListComponent, SearchComponent, HeroCardComponent, ImagePipe, ConfirmDialogComponent],
  imports: [
    //Importar el routing para que angular detecte las rutas a redirigir y tener, IMPORTANTE
    // Sino se escribe el modulo del routing no se redirige
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class HeroesModule { }
