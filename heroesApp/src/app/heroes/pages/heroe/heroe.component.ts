import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width:100%;
      border-radius: 5px;
    }`
  
  ]
})
export class HeroeComponent implements OnInit {

  hero! : Hero;
  constructor(private heroesService : HeroesService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroById(id))
    )
    .subscribe( hero => this.hero = hero);
  }

}
