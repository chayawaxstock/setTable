import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { Customer } from './models/customer';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
//מחזירה מוצרים ע"פ מזהה של קטגוריה
  getProductsByCategorId(id:number):Observable<Product[]>{
       return this.http.get<Product[]>(`http://localhost:50596/api/Product/getProductByIdCategory/${id}`);
  }

  //הוספת מוצר
addProduct(p:Product,file):Observable<any>
{
  let formData: FormData = new FormData();
  debugger;
  formData.append('uploadFile', file,file.name);
  let AddProduct={
    "nameProduct":p.nameProduct,
    "price":p.price,
    "unitsInStock":p.unitsInStock,
    "numCategory":p.numCategory,
    "color":p.color,
    "model":p.model,
    "size":p.size,
    "quentityInShop":p.quentityInShop
  }
  formData.append('res',JSON.stringify(AddProduct));
  return this.http.post("http://localhost:50596/api/Managmen/addProduct" ,formData);
}


getallproduct()
{
  return this.http.get("http://localhost:50596/api/Product/getAllProduct")
}

getAllCategories()
{
  return this.http.get("http://localhost:50596/api/category/getAllCategories")
}

validQty(item)
{
  debugger;
return this.http.post(`http://localhost:50596/api/Product/ValidQty`,item);
}

deleteproduct(idp:number):Observable<any>
{
return this.http.delete(`http://localhost:50596/api/Managmen/DeleteProduct/${idp}`);

  }
  orderByAmountOfDiners(idPlate,idGlass,numDinners)
  {
    debugger;
    return this.http.get(`http://localhost:50596/api/Product/OrderByAmountOfDiners/${idPlate}/${idGlass}/${numDinners}`);
  }

  GetToCart(idPlate,idGlass,numDinners)
  {
    return this.http.get(`http://localhost:50596/api/Product/getToCart/${idPlate}/${idGlass}/${numDinners}`);
  }
}

