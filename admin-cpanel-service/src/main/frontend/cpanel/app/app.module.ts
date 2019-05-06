import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ApartmentService} from './apartment/apartment.service';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {DashboardComponent} from './dashboard/dashboard.component';

import {ApartmentListComponent} from './apartment/apartment-list.component';
import {ApartmentNewComponent} from './apartment/apartment-new.component';
import {ApartmentViewComponent} from './apartment/apartment-view.component';
import {AlertComponent} from './alert/alert.component';
import {AlertService} from './alert/alert.service';
import {ConfirmationService} from './confirmation/confirmation.service';
import {ConfirmationComponent} from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AlertComponent,
    ConfirmationComponent,
    AppComponent,
    ApartmentListComponent,
    ApartmentNewComponent,
    ApartmentViewComponent,
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
    AlertService,
    ApartmentService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
