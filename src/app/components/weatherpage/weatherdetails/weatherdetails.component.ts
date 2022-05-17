import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';
import { getPostalCode } from './functions/get-posta-code.function';

@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrls: ['./weatherdetails.component.scss']
})

export class WeatherdetailsComponent implements OnInit  {
  currentTemp = "";
  place = "";
  postalCodeString: string = "12312";
  weatherLoaded: boolean = false;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute){
  }

  ngOnInit() {
    this.route.queryParams.pipe(
      map(getPostalCode)
    ).subscribe((value)=> this.postalCodeString = value);

    this.weatherService.getWeatherDataForPostalCode(this.postalCodeString).subscribe(
      (weatherDataRecieved) => { 
        console.log(weatherDataRecieved.data[0]);
        this.currentTemp = weatherDataRecieved.data[0].temp;
        this.place = weatherDataRecieved.data[0].city_name;
        this.weatherLoaded = true;
      });
  }
}
