import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  searchForWeather(): void {
    this.router.navigate(['weather-details?postal_code=123123']);
  }


}
