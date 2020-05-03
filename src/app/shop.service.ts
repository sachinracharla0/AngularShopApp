import { Injectable } from '@angular/core';  
import { Observable } from "rxjs";  
import {HttpHeaders, HttpClient } from "@angular/common/http";  
import { Shop } from "../app/shop";  
@Injectable({  
  providedIn: 'root'  
})  
export class ShopService {  
   Url="http://localhost:3000/api/shops";  
  constructor(private http:HttpClient) { }  
   InsertShop(shop:Shop)  
   {  
     debugger;  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
     return this.http.post<Shop[]>(this.Url, shop,httpOptions)  
   }  
   GetShopsRecord():Observable<Shop[]>  
   {  
     debugger;  
    return this.http.get<Shop[]>(this.Url)  
   }  
   DeleteShop(id:string):Observable<string>  
   {  
     debugger;  
    return this.http.delete<any>(this.Url + '/'+id);  
   }  
   GetShopById(id:string)  
   {  
    return this.http.get<Shop>(this.Url + '/' + id);  
   }  
   UpdateShop(shop:Shop, id: string)  
   {  
    debugger;  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
     return this.http.put<Shop[]>(this.Url+'/'+ id, shop,httpOptions)  
   }  
  
} 