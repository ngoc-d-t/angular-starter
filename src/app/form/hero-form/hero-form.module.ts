import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFormComponent } from './hero-form.component';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class HeroFormModule {}
