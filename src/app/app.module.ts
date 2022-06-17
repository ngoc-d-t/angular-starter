import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HelloWorldNgifComponent } from './hello-world-ngif/hello-world-ngif.component';
import { ToggleComponent } from './toggle/toggle.component';
import { CardComponent } from './card/card.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { BsTabGroupComponent } from './bs-tab-group/bs-tab-group.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAlertsComponent,
    ProductListComponent,
    HelloWorldNgifComponent,
    ToggleComponent,
    CardComponent,
    TabGroupComponent,
    TabPanelComponent,
    TabListComponent,
    BsTabGroupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
