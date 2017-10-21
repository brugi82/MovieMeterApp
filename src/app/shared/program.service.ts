import { IProgram } from './model/program';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from './loader/loader.service';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ProgramService {
    private _serviceUrl = 'http://localhost/MovieMeter.API/api/v1/Programs';
    private _headers: HttpHeaders;

    constructor(private _http: HttpClient, private _loaderService: LoaderService) {
        this._headers = new HttpHeaders().append( 'Content-Type', 'application/json' );
    }

    getProgram(id: string): Observable<IProgram> {
        this.onStart();
        return this._http.get<IProgram>(this._serviceUrl,
                        { headers: this._headers, params: new HttpParams().set('id', id)})
                        .finally(() => this.onEnd());
    }

    private onStart(): void {
        this._loaderService.show();
    }

    private onEnd(): void {
        this._loaderService.hide();
    }
}
