import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EagerComponent } from '../eager/eager.component';
import { LazyModule } from '../lazy/lazy.module';
import { CardRoutingModule } from './card.routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CardRoutingModule],
})
export class CardModule {}
