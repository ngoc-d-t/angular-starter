import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HelloWorldNgifComponent } from './hello-world-ngif/hello-world-ngif.component';
import { LifeCircleHookComponent } from './life-circle-hook/life-circle-hook.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TabListWithDirectiveComponent } from './tab-directive/tab-list-with-directive/tab-list-with-directive.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { ToggleComponent } from './toggle/toggle.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
