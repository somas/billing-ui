import {Component} from 'angular2/core';
import {PaymentDetailsList} from "./paymentDetailsList";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {PaymentSchedulesList} from "./paymentSchedulesList";

@Component({
    selector: 'my-app',
    template: `
        <h1>Billing-Admin</h1>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', as: 'Home', component: PaymentDetailsList, useAsDefault: true},
    { path: 'payment-details/:id/schedule', as: 'Schedule', component: PaymentSchedulesList},
])
export class AppComponent {

}
