import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartasCrudComponent } from "./components/views/cartas-crud/cartas-crud.component";
import { HomeComponent } from "./components/template/home/home.component";
import { CartasCreateComponent } from "./components/cartas/cartas-create/cartas-create.component"
import { CartasListReadComponent } from "./components/cartas/cartas-list-read/cartas-list-read.component"
import { CartasReadEditionComponent } from "./components/cartas/cartas-read-edition/cartas-read-edition.component"
import { CartasEditionComponent } from "./components/cartas/cartas-edition/cartas-edition.component"

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "cartas",
    component: CartasCrudComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
