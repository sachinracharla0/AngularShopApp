import { Component, OnInit } from '@angular/core';  
import { HttpClient } from "@angular/common/http";  
import { FormGroup, FormControl } from '@angular/forms';  
import { ShopService } from "../shop.service";  
import { Shop } from "../shop";  
import { Observable } from "rxjs";  
import { identifierModuleUrl } from '@angular/compiler';  
import { Router } from '@angular/router';  
@Component({  
  selector: 'app-addshop',
  templateUrl: './addshop.component.html',
  styleUrls: ['./addshop.component.css']
})  
export class AddshopComponent implements OnInit {  
  massage: string;  
  dataSaved = false;  
  Addshop:FormGroup;  
  ShopIdUpdate = "0";  
  idForUpdate;
  constructor(private router: Router,private shopService:ShopService) { }  
  
  InsertShop(shop:Shop)  
  {  
debugger;  
    if (this.ShopIdUpdate != "0") shop._id=this.ShopIdUpdate;
    
  let Id = localStorage.getItem("id");
  if(Id!= null) {
    this.shopService.UpdateShop(shop, Id).subscribe(  
      ()=>  
      {  
        if (this.ShopIdUpdate == "0") {  
          this.massage = 'Saved Successfully';  
  
        }  
        else  
        {  
          this.massage = 'Update Successfully';  
        }  
        this.dataSaved = true;  
        this.router.navigate(['/shop']);  
      })  
  } else 
  {
    this.shopService.InsertShop(shop).subscribe(  
      ()=>  
      {  
        if (this.ShopIdUpdate == "0") {  
          this.massage = 'Saved Successfully';  
  
        }  
        else  
        {  
          this.massage = 'Update Successfully';  
        }  
        this.dataSaved = true;  
        this.router.navigate(['/shop']);  
      })  
  }
  }  
  onFormSubmit(val) {  
    const shop = this.Addshop.value;
    shop['shopLocationLat'] = 17.56;
    shop['shopLocationLng'] = 85.5658;
    this.InsertShop(shop);  
  }  
    
  ShopEdit(id: string) {  
    debugger;  
    this.shopService.GetShopById(id).subscribe(shop => {  
      this.massage = null;  
      this.dataSaved = false;  
      debugger;  
      shop = shop['data'];
      this.ShopIdUpdate=id;  
      this.Addshop.controls['shopName'].setValue(shop.shopName);  
      this.Addshop.controls['shopType'].setValue(shop.shopType);  
      this.Addshop.controls['shopAddress'].setValue(shop.shopAddress['address']);  
      this.Addshop.controls['shopOwner'].setValue(shop.shopOwner);
    });  
    debugger;  
  }  
  clearform() {  
    debugger;  
    this.Addshop.controls['shopName'].setValue("");  
      this.Addshop.controls['shopType'].setValue("");  
      this.Addshop.controls['shopAddress'].setValue("");  
      this.Addshop.controls['shopOwner'].setValue("");
     
  }  
  ngOnInit() {  
    this.Addshop = new FormGroup({  
         
      shopName: new FormControl(),  
      shopType:new FormControl(),  
      shopAddress:new FormControl(),  
      shopOwner:new FormControl()
  });  
  let Id = localStorage.getItem("id"); 
  this.idForUpdate = localStorage.getItem('id');
if(Id!=null)  
{  
  this.ShopEdit(Id) ;  
 }}  
}
