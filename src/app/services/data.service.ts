import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  //metodo que tiene los datos json de una url
  getPos(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  
  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
