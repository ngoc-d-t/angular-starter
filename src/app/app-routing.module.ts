import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldNgifComponent } from './hello-world-ngif/hello-world-ngif.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'list', component: ProductListComponent },
  { path: 'hello', component: HelloWorldNgifComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
