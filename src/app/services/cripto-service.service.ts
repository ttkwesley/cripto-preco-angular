import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriptoService {
  private baseUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=';

  constructor(private http: HttpClient) {}

  getPreco(symbol: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${symbol}`);
  }
}
