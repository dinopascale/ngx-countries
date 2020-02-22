import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDetailsComponent } from './country-details.component';
import { CountryDetailsService } from 'src/services/country-details.service';


const routes: Routes = [
    {
        path: ':countryCode',
        component: CountryDetailsComponent,
        resolve: {
          country: CountryDetailsService
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryDetailsRoutingModule { }