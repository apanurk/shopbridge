import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit  {

  public productList : any;
  searchTerm: any;
  data:any;
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
    

  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  viewall(){
    this.ngOnInit();
  }
  viewmenclothing(){
    this.viewcategoryWise("men's clothing");
  }
  viewwomenmenclothing(){
    this.viewcategoryWise("women's clothing");

  }

  viewcategoryWise(item: any){
    console.log("a",item);
    this.api.viewcategory(item)
     .subscribe((res: any)=>{
       this.productList = res ;
     })
     console.log("res",this.productList);

  }

}
