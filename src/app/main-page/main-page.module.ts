import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {OrganicComponent} from "./organic/organic.component";
import {RouterModule, Routes} from "@angular/router";
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { WhatClientsSayComponent } from './what-clients-say/what-clients-say.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [{path: '', component: OrganicComponent}]

@NgModule({
  declarations: [OrganicComponent, NewArrivalsComponent, WhatClientsSayComponent, NewsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MainPageModule { }
