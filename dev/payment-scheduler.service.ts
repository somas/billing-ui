import {Injectable} from "angular2/core";
import {Http, RequestOptions, Headers} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PaymentScheduleService {
    constructor(private _http: Http) {}

    getPaymentScheduler(id: string) {
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers });
        return this._http.get("http://localhost:9100/billing-scheduler/payment/details/" + id + "/schedule", options)
            .map(res => res.json())
    }
}
