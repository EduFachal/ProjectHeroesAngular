import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Publisher, Hero } from '../../interfaces/hero.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-heroes',
  templateUrl: './add-heroes.component.html',
  styles: [
  ]
})

export class AddHeroesComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor(private heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public diaglog: MatDialog,
    private snackbar : MatSnackBar) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroById(id))
      )
      .subscribe(hero => this.hero = hero);
  }

  // Metodo para guardar un heroe o para modificarlo
  save() {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }
    if (this.hero.id) {
      this.heroesService.updateHero(this.hero)
        .subscribe(hero => { 
          this.showSnackbar('Hero has been updated')
          this.router.navigate(['/heroes']) })
    } else {
      this.heroesService.addHero(this.hero)
        .subscribe(hero => { 
          this.showSnackbar('Hero has been created')
          this.router.navigate(['/heroes']) })
    }
  }

  // Metodo para borra un heroe
  deleteH() {

    // Para que muestre un mensaje de confirmacion
    const dialog = this.diaglog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { ...this.hero }
    })

    dialog.afterClosed().subscribe( (result) => {
      if (result) {
        this.heroesService.deleteHero(this.hero)
          .subscribe(resp => {
            this.router.navigate(['/heroes']);
          });
      }
    })
  }
  showSnackbar( message : string){
    this.snackbar.open( message , 'Close' , {
      duration: 2500
    })
  }
}
