import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const URL="http://localhost:50596/";
@Injectable({
  providedIn: 'root'
})
export class ManegerService {

  constructor(private http:HttpClient) { }

  getDiagramd()
  {
    return this.http.get(URL+"api/managmen/diagram");
  }
}
