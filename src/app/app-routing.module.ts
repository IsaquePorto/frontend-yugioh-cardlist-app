import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/template/home/home.component";
import { CartasCreateComponent } from "./components/cartas/cartas-create/cartas-create.component"
import { CartasListReadComponent } from "./components/cartas/cartas-list-read/cartas-list-read.component"
import { CartasReadEditionComponent } from "./components/cartas/cartas-read-edition/cartas-read-edition.component"
import { CartasEditionComponent } from "./components/cartas/cartas-edition/cartas-edition.component"
import { CartasReadComponent } from "./components/cartas/cartas-read/cartas-read.component"
import { CartasMydeckComponent } from "./components/cartas/cartas-mydeck/cartas-mydeck.component"

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "cartas",
    component: CartasReadComponent
  },
  {
    path: "cartas/create",
    component: CartasCreateComponent
  },
  {
    path: "cartas/list",
    component: CartasListReadComponent
  },
  {
    path: "cartas/edition-read",
    component: CartasReadEditionComponent
  },
  {
    path: "cartas/edition",
    component: CartasEditionComponent
  },
  {
    path: "mydeck",
    component: CartasMydeckComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
