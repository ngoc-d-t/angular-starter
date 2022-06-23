import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerComponent } from '../eager/eager.component';
import { CardRoutingModule } from './card.routing.module';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent, EagerComponent],
  imports: [CommonModule, CardRoutingModule],
})
export class CardModule {}
