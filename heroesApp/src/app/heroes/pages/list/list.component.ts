import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface'
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  // Array de Heroes para poder recoger toda la informacion de los heroes de la BBDD
  heroes : Hero[] = [];

  constructor( private HeroService : HeroesService) { }

  // Al iniciar haga la peticion de recogida de los heroes
  ngOnInit(): void {
    // Se le asocia la info de cada posicon recogida
    this.HeroService.getHeroes().subscribe( heroes => this.heroes = heroes);
  }

}
