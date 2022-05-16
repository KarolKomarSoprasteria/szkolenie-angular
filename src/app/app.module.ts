import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/shared/topbar/topbar.component';
import { WeatherComponent } from './components/weather/weather.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MarksComponent } from './components/marks/marks.component';
import { TextMaskModule } from  'angular2-text-mask';
import { MarkItemComponent } from './components/mark-item/mark-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    WeatherComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    MarksComponent,
    MarkItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
