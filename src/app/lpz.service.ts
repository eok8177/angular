import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { Headers } from "@angular/http";

@Injectable()
export class LpzService {
    constructor(private http: Http) {
    }

    addLpz(name: string) {
        const body = JSON.stringify({ name: name });
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://lara.local/api/lpz', body, { headers: headers })
            .map(
                (response: Response) => {
                    return response.json().lpz;
                }
            );
        
    }

    getLpzs(): Observable<any> {
        return this.http.get('http://lara.local/api/lpz')
        .map(
            (response: Response) => {
                return response.json().lpz;
            }
        );
    }

    updateLpz(id: number, newName: string) {
        const body = JSON.stringify({name: newName});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('http://lara.local/api/lpz/' + id, body, {headers: headers})
            .map(
                (response: Response) => {
                    return response.json().lpz;
                }
            );
    }

    deleteLpz(id: number) {
        return this.http.delete('http://lara.local/api/lpz/' + id);
    }
}