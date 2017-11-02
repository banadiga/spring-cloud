import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ApartmentListComponent} from './apartment/apartment-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ApartmentService} from './apartment/apartment.service';
import {AppRoutingModule} from './app-routing.module';
import {ApartmentNewComponent} from "./apartment/apartment-new.component";


@NgModule({
  declarations: [
    AppComponent,
    ApartmentListComponent,
    ApartmentNewComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
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
