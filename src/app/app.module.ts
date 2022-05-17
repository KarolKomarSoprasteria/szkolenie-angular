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

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    WeatherdetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
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
