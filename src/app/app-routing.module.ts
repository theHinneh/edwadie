import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrganicComponent} from "./organic/organic.component";

const routes: Routes = [{path: 'welcome', component: OrganicComponent}, {path: '', pathMatch: 'full', redirectTo: 'welcome'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
