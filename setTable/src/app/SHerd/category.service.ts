import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './models/category';
const URL="http://localhost:50596/";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public httpClient:HttpClient) { }
//קבלת כל הקטגוריות
  getCategories()
  {
    return this.httpClient.get(URL+"api/category/getAllCategories")
  }
//קבלת מוצרים לפי  id
  getProdyctsByIdCategory(idCategory:string):Observable<Category[]>
  {
    debugger;
  return this.httpClient.get<Category[]>(URL+`api/Product/getProductByIdCategory/${idCategory}`)
  }
}

