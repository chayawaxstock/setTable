export class Customer {
    idCustomer:number;
    nameCustomer:string;
    password:string;
    street:string;
    phone:string;
    email:string;

    constructor(IdCustomer?:number,NameCustomer?:string,Password?:string,
        Street?:string,Phone?:string,Email?:string){
            this.idCustomer=IdCustomer;
            this.nameCustomer=NameCustomer;
            this.password=Password;
            this.street=Street;
            this.phone=Phone;
            this.email=Email;

    }

}
