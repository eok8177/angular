import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import { environment } from '../environments/environment';


@Injectable()
export class WorkService {
    constructor(private http: Http) {
    }

    apiUrl = environment.apiUrl;

    addWork(values) {
        const body = JSON.stringify({
            summ: values.summ,
            invoice: values.invoice,
            description: values.description,
            cat_id: values.cat_id,
            lpz_id: values.lpz_id,
        });
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.apiUrl + 'work', body, { headers: headers })
            .map(
                (response: Response) => {
                    return response.json().work;
                }
            );
    }

    getWorks(): Observable<any> {
        return this.http.get(this.apiUrl + 'works')
            .map(
                (response: Response) => {
                    return response.json();
                }
            );
    }

    updateWork(id: number, values) {
        const body = JSON.stringify({
            summ: values.summ,
            invoice: values.invoice,
            description: values.description,
            cat_id: values.cat_id,
            lpz_id: values.lpz_id,
        });
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put(this.apiUrl + 'work/' + id, body, {headers: headers})
            .map(
                (response: Response) => {
                    return response.json().work;
                }
            );
    }

    deleteWork(id: number) {
        return this.http.delete(this.apiUrl + 'work/' + id);
    }
}