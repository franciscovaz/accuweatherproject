import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/location.service';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private _weather: WeatherService,
    private _geoLocation: LocationService
  ) { }

  ngOnInit(): void { 
    this._geoLocation.getCity().subscribe((data:any) => (
      this.geoLocation = data;
      this._weather
        .getWeather(this.geoLocation.city, this.geoLocation.country)
        .subscribe((data:any) => {
          this.weather = data['data'][0];
          console.log(this.weather.)

        });

       });

