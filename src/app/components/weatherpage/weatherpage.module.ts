import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherdetailsComponent } from './weatherdetails/weatherdetails.component';
import { RouterModule } from '@angular/router';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';



@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WeatherdetailsComponent,
      },
    ]),
  ],
  declarations: [
  ],
})
export class WeatherpageModule { }
