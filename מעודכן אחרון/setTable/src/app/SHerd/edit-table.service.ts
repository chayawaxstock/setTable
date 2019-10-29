import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const URL="http://localhost:50596/";
@Injectable({
  providedIn: 'root'
})
export class EditTableService {

  constructor(private http: HttpClient) { }

  getPlates()
  {
    return this.http.get(URL+"api/editTable/getPlates")
  }

  GetPlatesBig()
  {
    return this.http.get(URL+"api/editTable/GetPlatesBig")
  }

  GetGlass()
  {
    return this.http.get(URL+"api/editTable/GetGlass")
  }

  // getTable(idPlate,idPlateBig,idGlass)
  // {
  //   return this.http.post(URL+`api/editTable/getTable/${idPlate}/${idPlateBig}/${idGlass}`);
  // }
}
