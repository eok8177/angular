import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";


@Injectable()
export class WorkService {
    constructor(private http: Http) {
    }

    addWork(values) {
        const body = JSON.stringify({
            summ: values.summ,
            invoice: values.invoice,
            description: values.description,
            cat_id: values.cat_id,
            lpz_id: values.lpz_id,
        });
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://lara.local/api/work', body, { headers: headers })
            .map(
                (response: Response) => {
                    return response.json().work;
                }
            );
    }

    getWorks(): Observable<any> {
        return this.http.get('http://lara.local/api/works')
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
        return this.http.put('http://lara.local/api/work/' + id, body, {headers: headers})
            .map(
                (response: Response) => {
                    return response.json().work;
                }
            );
    }

    deleteWork(id: number) {
        return this.http.delete('http://lara.local/api/work/' + id);
    }
}