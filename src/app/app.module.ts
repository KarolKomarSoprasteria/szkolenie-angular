import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/shared/topbar/topbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainpageModule } from './components/mainpage/mainpage.module';
import { WeatherpageModule } from './components/weatherpage/weatherpage.module';
import { HomepageComponent } from './components/mainpage/homepage/homepage.component';
import { WeatherdetailsComponent } from './components/weatherpage/weatherdetails/weatherdetails.component';
import { MatIconModule } from '@angular/material/icon';
import { TemperatureConverterPipe } from './components/weatherpage/weatherdetails/pipes/temperature-converter.pipe';
import { WeatherIconComponent } from './components/weatherpage/weather-icon/weather-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    TemperatureConverterPipe,
    WeatherdetailsComponent,
    WeatherIconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'weather-details',
        loadChildren: () => import('./components/weatherpage/weatherpage.module').then(
          (module) => module.WeatherpageModule
        )
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
