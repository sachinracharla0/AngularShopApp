import { Component, OnInit } from '@angular/core';  
import { Shop } from "../shop";  
import { ShopService } from "../shop.service";  
import { Observable } from "rxjs";  
import { Router } from '@angular/router';  
@Component({  
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})  
export class ShopComponent implements OnInit {  
  public shop: Observable<Shop[]>;  
  massage:String;  
  dataSaved=false;  
  p = 0;
  filter = '';
  constructor(private router: Router,private shopService:ShopService) { }  
   Loadshops()  
   {  
      debugger;  
      this.shopService.GetShopsRecord().subscribe(data=> {
        console.log(data);
        this.shop =data['data']; 
        
      });  
      // this.shop = this.shopService.GetShopsRecord();
      
        
      debugger;  
      
   }  
   ShopEdit(id: string) {  
    debugger;  
   localStorage.removeItem("id");  
   localStorage.setItem("id",id.toString());  
    this.router.navigate(['/addshop'], { queryParams: { Id: id } });  
    debugger;  
  }  
   DeleteShop(id: string) {  
    if (confirm("Are You Sure To Delete this Informations")) {  
  
      this.shopService.DeleteShop(id).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.massage = "Deleted Successfully";  
          this.p = 0;
          this.Loadshops();
          // this.router.navigate(['/shop']);
        }  
      );  
    }  
  }  
  ngOnInit() {  
    localStorage.clear();
    this.Loadshops();  
    this.p = 0;
  }  
  
}  