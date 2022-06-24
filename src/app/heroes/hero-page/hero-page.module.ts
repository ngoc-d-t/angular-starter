import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from '../message/message.component';
import { HeroPageComponent } from './hero-page.component';
import { HeroesComponent } from '../heroes/heroes.component';

@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroesComponent,
    MessageComponent,
    HeroPageComponent,
  ],
  imports: [CommonModule, FormsModule],
  // providers: [MessageService],
})
export class HeroPageModule {}
