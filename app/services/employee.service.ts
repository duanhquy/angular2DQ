import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    private apiUrl = "http://58a1129bdc09ed1200623713.mockapi.io/api/employeees";

    constructor(private _http: Http) {

    }
    GetList(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((response: Response) => response.json())
    }
}