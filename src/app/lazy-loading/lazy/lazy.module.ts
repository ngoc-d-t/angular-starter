import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from '../lazy/lazy.component';
import { LazyRoutingModule } from './lazy.routing.module';
import { LazyFirstComponent } from '../lazy-first/lazy-first.component';

@NgModule({
  declarations: [LazyComponent, LazyFirstComponent],
  imports: [CommonModule, LazyRoutingModule],
})
export class LazyModule {}
