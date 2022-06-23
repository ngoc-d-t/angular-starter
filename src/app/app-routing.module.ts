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
// import { CardModule } from './lazy-loading/card/card.module';
import { CreditCardDemoModule } from './cards/credit-card-demo/credit-card-demo.module';
import { CounterModule } from './counter/counter.module';
import { CounterComponent } from './counter/counter.component';
import { OperatorsModule } from './operators/operators.module';
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
  {
    path: 'lazy-loading',
    loadChildren: () =>
      import('./lazy-loading/card/card.module').then((m) => m.CardModule),
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'operators',
    loadChildren: () =>
      import('./operators/operators.module').then((m) => m.OperatorsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CreditCardDemoModule,
    CounterModule,
    OperatorsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
