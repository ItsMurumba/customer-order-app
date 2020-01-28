import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [ AppComponent, OrdersComponent ],
  imports: [  BrowserModule, AppRoutingModule, CustomersModule, SharedModule, CoreModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
