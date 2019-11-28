export class ProductOfOrder {
    idOrder:number;
    idProduct:number;
    quantity:number;

    constructor(IdOrder?:number,IdProduct?:number,Quantity?:number){
        this.idOrder=IdOrder;
       this.idProduct=IdProduct;
       this.quantity=Quantity;
    }
}
