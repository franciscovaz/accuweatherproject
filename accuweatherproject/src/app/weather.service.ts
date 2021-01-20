import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private weather: HttpClient) { }

  getAPIWeather(city: string, country: string) {
    return this.weather.get(
      `https://api.weatherbit.io/v2.0/current?city=${city}, ${country},&key=db184bb7ca2d4eaf9a361b7fa55922ff`
    );
  }
}