import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CreditCardDemoComponent } from './cards/credit-card-demo/credit-card-demo.component';
import { HelloWorldNgifComponent } from './hello-world-ngif/hello-world-ngif.component';
import { LifeCircleHookComponent } from './life-circle-hook/life-circle-hook.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TabListWithDirectiveComponent } from './tab-directive/tab-list-with-directive/tab-list-with-directive.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { ToggleComponent } from './toggle/toggle.component';
import { CardComponent as LazyCard } from './lazy-loading/card/card.component';
import { CardModule } from './lazy-loading/card/card.module';
import { LazyModule } from './lazy-loading/lazy/lazy.module';
import { CreditCardDemoModule } from './cards/credit-card-demo/credit-card-demo.module';
import { EagerComponent } from './lazy-loading/eager/eager.component';
const routes: Routes = [
  { path: 'list', component: ProductListComponent },
  { path: 'hello', component: HelloWorldNgifComponent },
  {
    path: 'hi',
    component: ToggleComponent,
    children: [{ path: 'card', component: CardComponent }],
  },
  { path: 'tab-group', component: TabListComponent },
  { path: 'tab-group-directive', component: TabListWithDirectiveComponent },
  { path: 'life-circle-hook', component: LifeCircleHookComponent },
  { path: 'credit-card', component: CreditCardDemoComponent },
  { path: 'lazy-loading', component: LazyCard },
  { path: '', redirectTo: 'eager', pathMatch: 'full' },
  { path: 'eager', component: EagerComponent },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy-loading/lazy/lazy.module').then((m) => m.LazyModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CreditCardDemoModule,
    CardModule,
    LazyModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
