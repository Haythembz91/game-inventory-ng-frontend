import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '../libs/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ItemService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getItems () : Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/api/items`);
  }

}
