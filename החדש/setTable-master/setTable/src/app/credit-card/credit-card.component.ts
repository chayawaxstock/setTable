import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../SHerd/customer.service';
  import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  showSuccess: boolean;
  showError: boolean;
  showCancel: boolean;

  ngOnInit(): void {
    this.initConfig();
  }
  constructor(public customersService:CustomerService) { }
  products=[];
  private initConfig(): void {
    this.payPalConfig = {
        currency: 'ILS',
        clientId: 'AZ--qfIbtAW1th-Q10-YGRiz_WICkcTqKCS-XHafQ7CB21iEVOZmFZVMwHWCKQLJEE7VHNWiXD_SAzLf',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'ILS',
                    value: this.customersService.sumPay.toLocaleString(),
                    breakdown: {
                        item_total: {
                            currency_code: 'ILS',
                            value:this.customersService.sumPay.toLocaleString()
                        }
                    }
                },
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'ILS',
                        value: this.customersService.sumPay.toLocaleString(),
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then(details => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            this.showSuccess = true;
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
            this.showCancel = true;

        },
        onError: err => {
            console.log('OnError', err);
            this.showError = true;
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
            //this.resetStatus();
        }
    };
}ך
   sendMail()
  {
    var user=JSON.parse(localStorage.getItem('user'));
    this.customersService.sendMail(this.products,user.id,this.customersService.sumPay).subscribe(res=>{
      alert('ההזמנה נוצרה בהצלחה מייל נשלח אליך עם כל הפרטים');
  })}
}


 
 
