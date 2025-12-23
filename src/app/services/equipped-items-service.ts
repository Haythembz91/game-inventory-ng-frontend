import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EquippedItems} from '../libs/interfaces';

@Injectable({
  providedIn: 'root',
})
export class EquippedItemsService {

  private apiUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) {
  }

  getEquippedItems(): Observable<EquippedItems[]> {
    return this.http.get<EquippedItems[]>(`${this.apiUrl}/api/equippedItems`);
  }

}
