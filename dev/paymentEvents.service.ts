import {Injectable} from "angular2/core";
import {Http, RequestOptions, Headers} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PaymentScheduleEventsService {
    constructor(private _http: Http) {}

    postPaymentScheduleEvents(data: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });
        console.log(JSON.stringify(data));
        return this._http.post("http://localhost:9100/billing-scheduler/payment/schedule/response", data, options)
            .map(res => res.json())

    }
}
