import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/types/Hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [HeroService],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;

  heroes: Array<Hero> = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
