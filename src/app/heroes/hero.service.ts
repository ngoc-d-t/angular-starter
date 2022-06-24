import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from '../models/mock-heros';
import { Hero } from '../types/Hero';
import { MessageService } from './message/message.service';

@Injectable()
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
