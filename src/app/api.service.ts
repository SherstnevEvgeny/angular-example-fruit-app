import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:3000/products";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",
      
    } ),responseType: 'json'
  };

  constructor(private httpClient: HttpClient) { }


  public get(){
    return this.httpClient.get(this.SERVER_URL);
  }

  public get_product(id: number) {
    return this.httpClient.get(this.SERVER_URL + "/" + id);
  }

  // public set(){
    
  //   return this.httpClient.post();
  // }

}
