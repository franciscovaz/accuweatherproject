import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/location.service';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  geoLocation: any;
  weather: any;
  city:any;
  country: any;
  temp: any;
  ob_time: any;

  constructor(
    private _weather: WeatherService,
    private _geoLocation: LocationService
  ) { }

  ngOnInit(): void {
    this._geoLocation.getAPICity().subscribe(response => {
      this.geoLocation = response;

      this.city = this.geoLocation.city;
      this.country = this.geoLocation.country;
      this._weather.getAPIWeather(this.geoLocation.city, this.geoLocation.country).subscribe((resp: any) => {
        this.weather = resp.data[0];
        this.temp = this.weather.temp;
        this.ob_time = this.weather.ob_time;
      })
    });


  }
}

