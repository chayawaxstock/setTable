export class OrderBasket {
    idOrder:number;
    date:Date;
    idCustomer:number;
    paymant:number;
    constructor(IdOrder?:number,Data?:Date,IdCustomer?:number,Paymant?:number){
     this.idCustomer=IdCustomer;
     this.idOrder=IdCustomer;
     this.date=Data;
     this.paymant=Paymant;
    }
}