import { Component, OnInit, } from '@angular/core'
import { LocationService } from '../location.service';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {
       geoLocation: any = {};
      weather: any = {};

  constructor(
    private _weather: WeatherService,
    private _geoLocation: LocationService
   ) {}

  ngOnInit(): void {
    this._geoLocation.getAPICity().subscribe((data: any) => {
      this.geoLocation = data;
      this._weather
        .getAPIWeather(this.geoLocation.city, this.geoLocation.country)
        .subscribe((data: any) => {
          this.weather = data['data'][0];
        });
    });
  }
}
