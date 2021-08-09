import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {
  public id: any;
  public viewdetails :any;

  constructor(private route: ActivatedRoute,private api : ApiService,private cartService : CartService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("id",this.id);
    this.api.viewdetailsByid(this.id)
    .subscribe(res=>{
      this.viewdetails = res;
      console.log("this.viewdetails",this.viewdetails); 

    })    
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
