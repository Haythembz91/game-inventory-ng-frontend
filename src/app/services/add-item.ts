import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddItemService {


  constructor(private http: HttpClient) {}

    private apiUrl = 'http://localhost:8080';
  addItem(item: FormData) {
    return this.http.post(`${this.apiUrl}/api/add`, item);
  }
}
