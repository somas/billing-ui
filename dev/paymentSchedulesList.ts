import {Component, Inject} from 'angular2/core';
import {PaymentScheduleService, PaymentScheduleService} from "./payment-scheduler.service";
import {RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
import {NgFor} from "angular2/common";
import {PaymentDetailsService} from "./payment-details.service";

@Component({
    selector : 'scheduler-ui',
    template : `
    <div class="container-fluid">
      <div class="row-fluid">
        <div class="col-sm-4 col-md-4 sidebar">
        <h3 class="page-header">Payment Details</h3>
        <div class="row">
          <div class="col-sm-4">
          Id
          </div>
          <div class="col-sm-4">
          {{paymentDetail?.id}}
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
          Purchase date
          </div>
          <div class="col-sm-4">
          {{paymentDetail?.purchaseDate| date: 'dd/MM/yyyy'}}
          </div>
        </div>
                <div class="row">
          <div class="col-sm-4">
         Payment Provider
          </div>
          <div class="col-sm-4">
          {{paymentDetail?.paymentProvider}}
          </div>
        </div>
                <div class="row">
          <div class="col-sm-4">
            Status
          </div>
          <div class="col-sm-4">
           {{paymentDetail?.status}}
          </div>
        </div>
                <div class="row">
          <div class="col-sm-4">
          Billing Interval
          </div>
          <div class="col-sm-4">
          {{paymentDetail?.billingIntervalDay}}
          </div>

        </div>
        </div>
        <div class="col-sm-6 main">
        <h3 class="page-header">Payment Schedule Event</h3>
         <form action="">
         <table class="table">
          <thead class="thead-inverse">
            <tr>
              <th>Events</th>
              <th></th>
              <th>#</th>
              <th>Id</th>
              <th>Schedule Type</th>
              <th>State</th>
              <th>Charge Date</th>
              <!--<th>Next Charge Date</th>-->
              <th>Scheduled Charge Date</th>
              <th>Created</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="#paymentSchedule of paymentSchedules;#i = index">
              <td><button type="button" class="btn btn-success btn-sm" (click)="submitEvent()">Success</button></td>
              <td><button type="button" class="btn btn-danger btn-sm" (click)="submitEvent()">Failure</button></td>
              <td>{{i}}</td>
              <td>{{paymentSchedule.id}}</td>
              <td>{{paymentSchedule.scheduleType}}</td>
              <td>{{paymentSchedule.state}}</td>
              <td>{{paymentSchedule.chargeDate | date: 'dd/MM/yyyy'}}</td>
              <!--<td>{{paymentSchedule.nextChargeDate | date: 'dd/MM/yyyy'}}</td>-->
              <td>{{paymentSchedule.scheduledChargeDate | date: 'dd/MM/yyyy'}}</td>
              <td>{{paymentSchedule.created| date: 'dd/MM/yyyy'}}</td>
              <td>{{paymentSchedule.updated| date: 'dd/MM/yyyy'}}</td>
             </tr>
            </tbody>
            </table> 
         
            </form>
        </div>
      </div>
    </div>
         `,
    providers: [NgFor, PaymentScheduleService, PaymentDetailsService],
    directives: [ROUTER_DIRECTIVES],
})

export class PaymentSchedulesList {

    paymentSchedules: Object
    paymentDetailsId: string
    paymentDetail: Object
    paymentScheduleId: string

    constructor(private _paymentScheduleService: PaymentScheduleService, params: RouteParams, private _paymentDetailsService: PaymentDetailsService) {
        this.paymentDetailsId = params.get('id');
    }

    ngOnInit() {
        this._paymentScheduleService.getPaymentScheduler(this.paymentDetailsId).subscribe(
            data => this.paymentSchedules = data,
            error => alert(error),
            () => console.log('finished')
        );

        this._paymentDetailsService.getPaymentDetailsWithId(this.paymentDetailsId).subscribe(
            data => this.paymentDetail = data,
            error => alert(error),
            () => console.log('finished')
        );
    }

    submitEvent(event) {
        console.log(this.paymentScheduleId);
    }
}
