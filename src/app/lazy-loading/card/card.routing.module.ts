import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EagerComponent } from '../eager/eager.component';
import { CardComponent } from './card.component';

const routes: Routes = [
  // { path: '', redirectTo: 'eager', pathMatch: 'full' },
  {
    path: '',
    component: CardComponent,
    children: [
      { path: 'eager', component: EagerComponent },
      {
        path: 'lazy',
        loadChildren: () =>
          import('../lazy/lazy.module').then((m) => m.LazyModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
