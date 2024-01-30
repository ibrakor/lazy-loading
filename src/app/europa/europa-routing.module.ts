import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EuropaComponent} from "./europa.component";
import {AmericaComponent} from "../america/america.component";
import {EspanaComponent} from "./espana/espana.component";
import {FranciaComponent} from "./francia/francia.component";
import {ItaliaComponent} from "./italia/italia.component";

const routes: Routes = [
  {
    path: 'espana',
    component: EspanaComponent
  },
  {
    path: 'francia',
    component: FranciaComponent
  },
  {
    path: 'italia',
    component: ItaliaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EuropaRoutingModule { }
