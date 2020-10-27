import { Injectable } from '@angular/core';

import { Home } from '../shared/home';
//import { DISHES } from '../shared/dishes';

import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';



import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {



  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    getHomeContent(): Observable<Home[]> {
      return this.http.get<Home[]>(baseURL + 'home')
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }


}
