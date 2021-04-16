import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  term : string = "";
  heroes: Hero[] = [];
  heroSelected : Hero | undefined;
  constructor(private heroesService : HeroesService) { }

  ngOnInit(): void {
  }

  // Segun la palabra puesta en el form, hace un trim y lo que encuentre lo guarda en un Array
  searching(){
    this.heroesService.getPrompts(this.term.trim())
      .subscribe(heroes => this.heroes = heroes);
  }


  optionSelected(event : MatAutocompleteSelectedEvent){
    if(!event.option.value){
      this.heroSelected = undefined;
      return;
    }
    const hero : Hero = event.option.value;
    this.term = hero.superhero;

    this.heroesService.getHeroById( hero.id! )
    .subscribe( hero => this.heroSelected = hero);
  }
}
