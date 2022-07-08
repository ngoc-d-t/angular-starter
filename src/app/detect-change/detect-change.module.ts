import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetectChangeRoutingModule } from './detect-change-routing.module';
import { CounterComponent } from './counter/counter.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [CounterComponent, ItemComponent],
  imports: [CommonModule, DetectChangeRoutingModule],
})
export class DetectChangeModule {}
