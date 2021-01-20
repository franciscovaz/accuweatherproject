import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private geoLocation: HttpClient) {}

  getAPICity(){
    return this.geoLocation.get('http://ip-api.com/json');
  }
}
