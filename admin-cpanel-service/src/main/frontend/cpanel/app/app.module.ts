import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ApartmentListComponent} from './apartment/apartment-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ApartmentService} from './apartment/apartment.service';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ApartmentListComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    ApartmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
