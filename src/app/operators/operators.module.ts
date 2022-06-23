import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { FlatMapComponent } from './flat-map/flat-map.component';


@NgModule({
  declarations: [
    ConcatMapComponent,
    MergeMapComponent,
    SwitchMapComponent,
    FlatMapComponent
  ],
  imports: [
    CommonModule,
    OperatorsRoutingModule
  ]
})
export class OperatorsModule { }
