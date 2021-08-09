import { Component, OnInit } from '@angular/core';
import { OrderlistService } from 'src/app/service/orderlist.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
public selectedFile :any;
public imagePath : any;
//public isEdit:any=false;
public url : any;
public message : any;
allorder: any;
error:any;
isEdit=false;
orderobj={
  pname:'',
  pcode:'',
  rname:'',
  quantity:'',
  address:'',
  file:''
}

  constructor(private orderservice :OrderlistService) { }

  addorder(formobj:any){
    console.log("formobj",formobj);
    this.orderservice.crateorder(formobj).subscribe((res)=>{
      console.log("orderhas been added");
      this.getlatestorder();
      this.reset();
    })

  }
  reset(){
  
    this.orderobj.pname='';
    this.orderobj.pcode='';
    this.orderobj.rname='';
    this.orderobj.rname='';
    this.orderobj.quantity='';
    this.orderobj.address='';
    this.orderobj.file='';
  }

  getlatestorder(){
    this.orderservice.getallorder().subscribe((res:any)=>{
      this.allorder = res;
    },(error:any)=>{
     // alert("s");
         this.error =error.message;
        // console.log("error",error);
         console.log("error",error.message);
     }
     );
  }
  deleteorder(order:any){
    //alert("a");
    this.orderservice.deleteOrder(order).subscribe(()=>{
    this.getlatestorder();
  })
  }
  editorder(order:any){
    this.isEdit=true;
      this.orderobj=order;
  }

  updateorder(){
    this.isEdit=!this.isEdit;
    this.orderservice.updateorder(this.orderobj).subscribe(()=>{
      this.getlatestorder();
      this.reset();
    })
  }

  ngOnInit(): void {
   this.getlatestorder();
  }






  onFileChanged(event:any) {
    
    const files = event.target.files;
    if (files.length === 0)
        return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
        this.url = reader.result; 
    }
  }
}
