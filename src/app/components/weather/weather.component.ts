import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  public myModel = '';
  public mask = [/\d/, /\d/, ' - ', /\d/, /\d/, /\d/];

  @ViewChild('weatherInput') weatherInput?: ElementRef;
  

  checkWeather() {
    if (this.weatherInput?.nativeElement.value=="") return;
    console.log(this.weatherInput?.nativeElement.value);
  }

}
