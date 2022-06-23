import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatAllComponent } from './concat-all/concat-all.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ExhaustAllComponent } from './exhaust-all/exhaust-all.component';
import { FlatMapComponent } from './flat-map/flat-map.component';
import { MergeAllComponent } from './merge-all/merge-all.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { SwitchAllComponent } from './switch-all/switch-all.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';

const routes: Routes = [
  { path: 'merge-all', component: MergeAllComponent },
  { path: 'switch-all', component: SwitchAllComponent },
  { path: 'exhaust-all', component: ExhaustAllComponent },
  { path: 'concat-all', component: ConcatAllComponent },
  { path: 'concat-map', component: ConcatMapComponent },
  { path: 'merge-map', component: MergeMapComponent },
  { path: 'switch-map', component: SwitchMapComponent },
  { path: 'flat-map', component: FlatMapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorsRoutingModule {}
