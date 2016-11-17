import {Component, Input} from 'angular2/core';
import {PaymentDetailsService} from "./payment-details.service";
import {NgFor} from "angular2/common";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector : 'payment-details-list',
    template : `
<br><br><br><br><br>
    <h4 class="page-header">List of Payment Details</h4>
       <table class="table">
          <thead class="thead-inverse">
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>Purchase date</th>
              <th>Payment Type</th>
              <th>Payment Provider</th>
              <th>Payment Number</th>
              <th>Price</th>
              <th>Currency Code</th>
              <th>Billing Interval</th>
              <th>Status</th>
              <th>Created</th>
              <th>Updated</th>
              <th>Link To Schedules</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="#paymentDetail of paymentDetails;#i = index">
              <td>{{i}}</td>
              <td>{{paymentDetail.id}}</td>
              <td>{{paymentDetail.purchaseDate| date: 'dd/MM/yyyy'}}</td>
              <td>{{paymentDetail.paymentType}}</td>
              <td>{{paymentDetail.paymentProvider}}</td>
              <td>{{paymentDetail.paymentNumber}}</td>
              <td>{{paymentDetail.price}}</td>
              <td>{{paymentDetail.priceCurrencyCode}}</td>
              <td>{{paymentDetail.billingIntervalDay}}</td>
              <td>{{paymentDetail.status}}</td>
              <td>{{paymentDetail.created| date: 'dd/MM/yyyy'}}</td>
              <td>{{paymentDetail.updated| date: 'dd/MM/yyyy'}}</td>
              <td><a [routerLink]="['Schedule', {id: paymentDetail.id}]">schedule</a></td>
             </tr>
            </tbody>
            </table>

              
`,
    providers: [NgFor, PaymentDetailsService],
    directives: [ROUTER_DIRECTIVES],
})

export class PaymentDetailsList {
    paymentDetails: Object

    constructor(private _paymentDetailsService: PaymentDetailsService) {}

    ngOnInit() {
        this._paymentDetailsService.getPaymentDetails().subscribe(
            data => this.paymentDetails = data,
            error => alert(error),
            () => console.log('finished')
        );
    }
}
