import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){ }

  getPokemon(){
      return this._http.get("https://pokeapi.co/api/v2/pokemon/ditto/");
  }

  //non functional example below
  addPokemon(data:any){
    return this._http.post('link', data);
  }
}
