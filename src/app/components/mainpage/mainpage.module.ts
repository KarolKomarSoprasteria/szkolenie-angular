import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MarksComponent } from './marks/marks.component';
import { WeatherComponent } from './weather/weather.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkItemComponent } from './mark-item/mark-item.component';
import { TextMaskModule } from  'angular2-text-mask';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  declarations: [HomepageComponent, AboutComponent, ContactComponent, MarksComponent, WeatherComponent, MarkItemComponent ],
  exports: [HomepageComponent, AboutComponent, ContactComponent, MarksComponent, WeatherComponent, MarkItemComponent],
})
export class MainpageModule { }
