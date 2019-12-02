import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../SHerd/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: any;

  constructor(public p: ProductsService,private route: Router) { }

  ngOnInit() {
    this.product=this.p.productEdit;
  }
  edit()
  {
    debugger;
    this.p.editProduct(this.product).subscribe(res=>{
      alert("הפריט עודכן בהצלחה");
      this.route.navigate(['deleteProduct']);
    })
  }

}
