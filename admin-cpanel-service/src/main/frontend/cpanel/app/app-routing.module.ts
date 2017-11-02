import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ApartmentListComponent} from './apartment/apartment-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ApartmentNewComponent} from './apartment/apartment-new.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'apartments', component: ApartmentListComponent},
  {path: 'new-apartment', component: ApartmentNewComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
