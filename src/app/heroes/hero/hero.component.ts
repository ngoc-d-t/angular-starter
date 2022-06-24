import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/models/mock-heros';
import { Hero } from 'src/app/types/Hero';

@Component({
  selector: 'app-form-modules',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  heroes = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
