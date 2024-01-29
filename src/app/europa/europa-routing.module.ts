import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EuropaComponent} from "./europa.component";
import {AmericaComponent} from "../america/america.component";

const routes: Routes = [
  {
    path: 'america',
    component: AmericaComponent,
    loadChildren: () => import('../america/america.module').then(m => m.AmericaModule)
  },
  {
    path: 'europa',
    component: EuropaComponent,
    loadChildren: () => import('../europa/europa.module').then(m => m.EuropaModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EuropaRoutingModule { }
