import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { Headers } from "@angular/http";

import { environment } from '../environments/environment';

@Injectable()
export class LpzService {
    constructor(private http: Http) {
    }

    apiUrl = environment.apiUrl;

    addLpz(name: string) {
        const body = JSON.stringify({ name: name });
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.apiUrl + 'lpz', body, { headers: headers })
            .map(
                (response: Response) => {
                    return response.json().lpz;
                }
            );
        
    }

    getLpzs(): Observable<any> {
        return this.http.get(this.apiUrl + 'lpz')
        .map(
            (response: Response) => {
                return response.json().lpz;
            }
        );
    }

    updateLpz(id: number, newName: string) {
        const body = JSON.stringify({name: newName});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put(this.apiUrl + 'lpz/' + id, body, {headers: headers})
            .map(
                (response: Response) => {
                    return response.json().lpz;
                }
            );
    }

    deleteLpz(id: number) {
        return this.http.delete(this.apiUrl + 'lpz/' + id);
    }
}