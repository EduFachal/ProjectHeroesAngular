import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http : HttpClient) { }

    // Servicio para recoger la informacón de los heroes
    getHeroes(){
      return this.http.get<Hero[]>( `${this.baseUrl}/heroes`);
    }
  
    // Servicio para buscar los heroes por palabra y limitado a 6
    getPrompts( term : string){
      return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${ term }&_limit=6`);
    }

    // Servicio para buscar los heroes por Id
    getHeroById( id: string ){
      return this.http.get<Hero>(`${this.baseUrl}/heroes/${ id }`);
    }

    // Servicio para añadir un heroe y que te devuelva a la pagina heroes
    addHero( hero : Hero ) : Observable<Hero>{
      return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
    }

    // Servicio para modificar un heroe y que te devuelva a la pagina del heroe segun su id
    updateHero( hero : Hero ) : Observable<Hero>{
      return this.http.post<Hero>(`${this.baseUrl}/heroes/${ hero.id }`, hero);
    }

    // Servicio para borrar un heroe
    deleteHero( hero : Hero){
      return this.http.delete<Hero>(`${this.baseUrl}/heroes/${hero.id}`);
    }
}
