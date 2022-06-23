import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyFirstComponent } from '../lazy-first/lazy-first.component';
import { LazyComponent } from './lazy.component';

const routes: Routes = [
  { path: '', component: LazyComponent },
  { path: 'lazy-first', component: LazyFirstComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRoutingModule {}
