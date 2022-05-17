import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }
  customHeaders: HttpHeaders = new HttpHeaders({
    "content-type": "application/json; charset=utf-8",
  });

  getWeatherDataForPostalCode(postalCode: string): Observable<any> {
    return this.httpClient.get<[]>(environment.weatherUrl, {
      params: {postal_code: postalCode, key: "606365a674d54088b2b6e26113495149", country: "PL"},
      headers: this.customHeaders });
  }

}
