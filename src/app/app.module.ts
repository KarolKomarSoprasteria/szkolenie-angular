import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { WeatherComponent } from './components/weather/weather.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MarksComponent } from './components/marks/marks.component';
import { TextMaskModule } from  'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    WeatherComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    MarksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
