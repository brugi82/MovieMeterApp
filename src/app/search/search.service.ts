import { IProgramQuery } from './../shared/model/program-query';
import { Injectable } from '@angular/core';
import { IProgram } from '../shared/model/program';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



@Injectable()
export class SearchService {
    private _serviceUrl = 'http://localhost/MovieMeter.API/api/v1/Programs/Search';
    private _headers: HttpHeaders;
    private _options: RequestOptions;
    constructor(private _http: HttpClient) {
        this._headers = new HttpHeaders().append( 'Content-Type', 'application/json' );
    }

    search(programQuery: IProgramQuery): Observable<IProgram[]> {
        // let urlSearchParams = this.getSearchParams(programQuery);
        // let options = new RequestOptions({
        //     headers: this._headers,
        //     params: urlSearchParams
        //   });
        let body = JSON.stringify(programQuery);
        return this._http.post<IProgram[]>(this._serviceUrl, body, {headers: this._headers});
    }

    getProgramCount(): Observable<number> {
        return this._http.get<number>(this._serviceUrl + 'Programs/Count');
    }

    private getSearchParams(programQuery: any): HttpParams {
        let params: HttpParams = new HttpParams();

        for (let key in programQuery) {
            if (programQuery.hasOwnProperty(key)) {
                let val = programQuery[key];
                params = params.append(key, val);
            }
        }

        return params;
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
    }
}