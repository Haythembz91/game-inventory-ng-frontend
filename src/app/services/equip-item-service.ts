import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EquipResponse, Item} from '../libs/interfaces';

@Injectable({
  providedIn: 'root',
})
export class EquipItemService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  equipItem(item: Item): Observable<EquipResponse> {
    return this.http.post<EquipResponse>(`${this.apiUrl}/api/equip`, item);
  }

  unEquipItem(item: Item): Observable<EquipResponse> {
    return this.http.delete<EquipResponse>(`${this.apiUrl}/api/equip`,{
      body: item
    });
  }

}
