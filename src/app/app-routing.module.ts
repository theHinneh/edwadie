import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'welcome', loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule)}, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
