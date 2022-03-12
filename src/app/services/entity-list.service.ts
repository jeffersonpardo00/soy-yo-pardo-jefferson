import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity } from './../models/entity';

@Injectable({
  providedIn: 'root'
})
export class EntityListService {

  constructor(
    private http: HttpClient
  ) { }

  getEntity(id:string): Observable<any> {
    return this.http.get<any>(`${environment.url_api}${id}`);
   // return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/ditto');
 }



}
