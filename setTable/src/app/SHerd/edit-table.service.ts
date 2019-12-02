import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const URL="http://localhost:50596/";
@Injectable({
  providedIn: 'root'
})
export class EditTableService {

  plate:number;
  plateBig:number;
  glass:number;
  numDiners:number;
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

  getTable(idPlate,idPlateBig,idGlass)
  {
    debugger;
    return this.http.get(URL+`api/editTable/getTable/${idPlate}/${idPlateBig}/${idGlass}`);
  }
}
