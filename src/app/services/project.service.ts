import { Injectable } from '@angular/core';
import { Project } from '../shared/project';
import { Product } from '../shared/product';
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
export class ProjectService {



  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    /*getProjects(): Observable<Project[]> {
      return this.http.get<Project[]>(baseURL + 'projects')
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }*/

    getBambooProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(baseURL + 'bamboo_products')
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getCottonProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(baseURL + 'cotton_products')
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    /*getDish(id: string): Observable<Dish> {
      return this.http.get<Dish>(baseURL + 'dishes/' + id)
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getFeaturedDish(): Observable<Dish> {
      return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getDishIds(): Observable<number[] | any> {
      return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
        .pipe(catchError(error => error));
    }

    putDish(dish: Dish): Observable<Dish> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Dish>(baseURL + 'dishes/' + dish.id, dish, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError)); */

  }
