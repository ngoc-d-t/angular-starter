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
import { CreditCardDemoModule } from './cards/credit-card-demo/credit-card-demo.module';
import { CounterModule } from './counter/counter.module';
import { CounterComponent } from './counter/counter.component';
import { OperatorsModule } from './operators/operators.module';
import { HeroPageModule } from './heroes/hero-page/hero-page.module';
import { HeroPageComponent } from './heroes/hero-page/hero-page.component';
import { HeroFormComponent } from './form/hero-form/hero-form.component';
import { HeroFormModule } from './form/hero-form/hero-form.module';
import { DialogOverviewExampleComponent } from './dialog/dialog-overview-example/dialog-overview-example.component';
import { ItemComponent } from './detect-change/item/item.component';
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
  {
    path: 'heroes',
    component: HeroPageComponent,
  },
  { path: 'form', component: HeroFormComponent },
  { path: 'dialog', component: DialogOverviewExampleComponent },
  { path: 'detect-change', component: ItemComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CreditCardDemoModule,
    CounterModule,
    OperatorsModule,
    HeroPageModule,
    HeroFormModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
