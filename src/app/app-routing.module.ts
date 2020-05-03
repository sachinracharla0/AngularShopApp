import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { ShopComponent } from "./shop/shop.component";  
import { AddshopComponent } from "./addshop/addshop.component";  
  
const routes: Routes = [  
 {path:"shop",component:ShopComponent},  
 {path:"addshop",component:AddshopComponent},  
 { path: '**', redirectTo: 'shop' }
];  
  
@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }  