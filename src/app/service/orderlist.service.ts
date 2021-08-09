import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderlistService {

  constructor(private _http:HttpClient) { }

  crateorder(order:any){
    return this._http.post("http://localhost:3000/productList",order);
  }
  getallorder(){
    return this._http.get("http://localhost:3000/productList");
  }
  deleteOrder(order:any){
    return this._http.delete("http://localhost:3000/productList/"+ order.id);
  }

  updateorder(order:any){
    return this._http.put("http://localhost:3000/productList/"+ order.id,order);

  }

}
