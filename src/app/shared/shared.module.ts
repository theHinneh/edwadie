import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CartPreviewComponent } from './cart-preview/cart-preview.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    MainHeaderComponent,
    NavigationComponent,
    CartPreviewComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        MainHeaderComponent,
        NavigationComponent,
        FooterComponent
    ]
})
export class SharedModule { }
