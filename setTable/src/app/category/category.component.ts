import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../SHerd/category.service';
import { Category } from '../SHerd/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryId:number;
  category=new Category();
  categorySelected:number; 
  allCategories:any=[];
  allProductsOfCategory:any=[];
  value:any;
  
  ngOnInit() {
  }
 

  constructor(public categoryServise:CategoryService){

  this.categoryServise.getCategories().subscribe(res=>{
     this.allCategories=res;
   });
   debugger;
 

}
selectCategory(value){
  
   this.categoryServise.getProdyctsByIdCategory(value).subscribe(res=>{
     this.allProductsOfCategory=res;
      console.log("value  ",value);
      console.log("res  ",res);

   });
  }
}