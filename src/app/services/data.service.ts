import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Componente } from '../_models/componente';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getMenuOpts(){
    // return this.http.get<Componente[]>('/assets/data/menu.json');
  }
}
