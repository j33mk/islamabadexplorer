import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcademicsComponent} from './academics/academics.component';
import {ParksComponent} from './parks/parks.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';

const routes: Routes = [
    {
      path:'academics',
      component:AcademicsComponent
    },
    {
      path:'parks',
      component:ParksComponent
    },
    {
      path:'restaurants',
      component:RestaurantsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
