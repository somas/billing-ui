import {Component, ViewChild} from 'angular2/core';
import {PaymentScheduleService, PaymentScheduleService} from "./billing-scheduler.service";

@Component({
    selector : 'scheduler-ui',
    template : `Enter Payment Details Id: <input type="text" #inputElement/> <br>
<button (click)="getData()">fetch schedule</button>
<p>Output: {{paymentSchedule}}</p>
            `,
    providers: [PaymentScheduleService]
})

export class PaymentSchedulesList {

    paymentSchedule: string

    @ViewChild('inputElement') input;

    constructor(private _paymentScheduleService: PaymentScheduleService) {}

    getData() {
        this._paymentScheduleService.getPaymentScheduler(this.input.nativeElement.value).subscribe(
            data => this.paymentSchedule = JSON.stringify(data),
            error => this.paymentSchedule = error,
            () => console.log('finished')
        );
    }
}
