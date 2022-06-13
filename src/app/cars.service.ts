import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import 'rxjs'
// import 'rxjs/Rx';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map'

@Injectable()

export class CarsService {
  constructor(private http: HttpClient) {
  }

  getCars() {
    return this.http.get('http://localhost:3000/cars').pipe(map(res => (res)));
  }

  addCar(carName: string) {
    const data = {
      name: carName,
      color: 'green'
    }

    return this.http.post('http://localhost:3000/cars', data).pipe(map(res => (res)));
  }
}

