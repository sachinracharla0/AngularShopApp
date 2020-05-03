import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";  
import { ShopService } from "../app/shop.service";

import { ShopComponent } from './shop/shop.component';
import { AddshopComponent } from './addshop/addshop.component'; 
import {NgxPaginationModule} from 'ngx-pagination';   
import { Ng2SearchPipeModule } from 'ng2-search-filter';  

@NgModule({  
  declarations: [  
    AppComponent,  
    ShopComponent,  
    AddshopComponent,  
  ],  
  imports: [  
    BrowserModule,FormsModule,  
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,Ng2SearchPipeModule,NgxPaginationModule  
  ],  
  providers: [ShopService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  