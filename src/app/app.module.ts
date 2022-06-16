import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HelloWorldNgifComponent } from './hello-world-ngif/hello-world-ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAlertsComponent,
    ProductListComponent,
    HelloWorldNgifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
