import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
}
getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
}

}
