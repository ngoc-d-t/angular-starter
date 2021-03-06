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
import { CounterComponent } from './tab-directive/counter/counter.component';
import { TabPanelContentDirective } from './tab-directive/tab-panel-with-directive/tab-panel-content.directive';
import { TabListWithDirectiveComponent } from './tab-directive/tab-list-with-directive/tab-list-with-directive.component';
import { BsTabGroupWithDirectiveComponent } from './tab-directive/bs-tab-group-with-directive/bs-tab-group-with-directive.component';
import { TabPanelWithDirectiveComponent } from './tab-directive/tab-panel-with-directive/tab-panel-with-directive.component';
import { TabGroupWithDirectiveComponent } from './tab-directive/tab-group-with-directive/tab-group-with-directive.component';
import { LifeCircleHookComponent } from './life-circle-hook/life-circle-hook.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer } from './stores/counter/counter.reducer';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from './heroes/hero/hero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from './dialog/dialog.module';
import { DetectChangeModule } from './detect-change/detect-change.module';

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
    CounterComponent,
    TabPanelContentDirective,
    TabListWithDirectiveComponent,
    BsTabGroupWithDirectiveComponent,
    TabPanelWithDirectiveComponent,
    TabGroupWithDirectiveComponent,
    LifeCircleHookComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }),
    EffectsModule.forRoot([]),
    FormsModule,
    BrowserAnimationsModule,
    DialogModule,
    DetectChangeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
