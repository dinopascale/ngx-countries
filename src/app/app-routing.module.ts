import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';


const routes: Routes = [
  {
    path: '',
    component: CountriesComponent
  },
  {
    path: 'country',
    loadChildren: () => import('./country-details/country-details.module').then(m => m.CountryDetailsModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
