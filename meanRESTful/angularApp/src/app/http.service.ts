
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getTasks();
    this.getOneTask();
    this.createOneTask();
    this.deleteOneTask();
  }

  getTasks(){

    let tempObservable = this._http.get('/tasks');    // this connects to server.js

    // subscribe to our observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Success (service): Got all Tasks", data));
  }

  getOneTask(){

    let tempObservable = this._http.get('/:id');

    tempObservable.subscribe(data => console.log("Success (service): Found One Task", data));
  }

  createOneTask(){

    let tempObservable = this._http.get('/new/:id');

    tempObservable.subscribe(data => console.log("Success (service): Created One Task", data));
  }

  deleteOneTask(){

    let tempObservable = this._http.get('/remove/:id');

    tempObservable.subscribe(data => console.log("Success (service): Removed One Task", data));
  }
  
}