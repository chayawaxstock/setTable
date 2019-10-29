import { Component, OnInit } from '@angular/core';
import { Product } from '../SHerd/models/product';
import { ProductsService } from '../SHerd/products.service';

@Component({
  selector: 'app-allProducts',
  templateUrl: './allProducts.component.html',
  styleUrls: ['./allProducts.component.scss']
})
export class AllProductsComponent implements OnInit {
 
  file: any;
  constructor(private productServise: ProductsService) { }

  ngOnInit() {
  }
  onSubmit() {
    debugger;
  
  }

  filesPicked(files) {
    debugger;
    this.file = files[0];
  }
}
