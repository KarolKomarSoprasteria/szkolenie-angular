import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  public mask = [/\d/, /\d/, ' - ', /\d/, /\d/, /\d/];

  @ViewChild('weatherInput') weatherInput?: ElementRef;
  
  postalCode = '';
  
  constructor(private router: Router) {}

  searchForWeather(): void {
    console.log(this.weatherInput?.nativeElement.value);
    const queryParams = {
      postal_code: this.weatherInput?.nativeElement.value.replace(' - ', ''),
    };
    this.router.navigate(['weather-details'], { queryParams });
  }


}
