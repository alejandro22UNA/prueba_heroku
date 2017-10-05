import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ItemListComponent } from './components/views/item-list/item-list.view';
import { HomeComponent } from './components/home/home.component';
import { PruebaComponent } from './components/prueba/prueba.component';
// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent // Home Route,
  },
  {
    path: 'prueba',
    component: PruebaComponent
  },
  {
    path: 'item-list',
    component: ItemListComponent // Item-List View Route,
  },
  { path: '**', component: HomeComponent } // "Catch-All" Route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
