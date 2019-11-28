export class OrderBasket {
    idProduct:number;
    quantity:number;

    constructor(IdProduct?:number,Quantity?:number){
      this.idProduct=IdProduct;
      this.quantity=Quantity;
    }
}
