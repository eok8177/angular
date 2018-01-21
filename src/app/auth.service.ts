import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import { environment } from '../environments/environment';


@Injectable()
export class AuthService {
    constructor(private http: Http) {
    }

    apiUrl = environment.apiUrl;

    signup(values) {
        const body = { 
            username: values.username,
            email: values.email,
            password: values.password
        };
        const headers = new Headers({ 
            // 'Content-Type': 'application/json',
             'X-Requested-With': 'XMLHttpRequest'
        });
        return this.http.post(this.apiUrl + 'user', body, { headers: headers });
    }

    signin(values) {
        const body = { 
            username: values.username,
            password: values.password
        };
        const headers = new Headers({ 
             'X-Requested-With': 'XMLHttpRequest'
        });
        return this.http.post(this.apiUrl + 'user/signin', body, { headers: headers })
            .map(
                (response: Response) => {
                    const token = response.json().token;
                    const base64Url = token.split('.')[1];
                    const base64 = base64Url.replace('-','+').replace('_','/');
                    return {token: token, decoded: JSON.parse(window.atob(base64))};

                }
            )
            .do(
                tokenData => {
                    localStorage.setItem('token', tokenData.token);
                }
            );
    }

    getToken() {
        return localStorage.getItem('token');
    }
}