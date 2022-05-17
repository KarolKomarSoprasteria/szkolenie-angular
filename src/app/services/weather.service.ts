import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class WeatherService {
  constructor(private httpClient: HttpClient) { }

  getWeatherDataForPostalCode(postalCode: string): Observable<any> {
    return this.httpClient.get<[]>(environment.weatherUrl, {
      params: {postal_code: postalCode, key: environment.API_KEY, country: "PL"},
    });
  }

}
