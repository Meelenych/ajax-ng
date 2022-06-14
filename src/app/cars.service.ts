import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import 'rxjs'
// import 'rxjs/Rx';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map'

//Запуск сервера json-server --watch db.json

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

  changeColor(car: any, color: string) {
    // return this.http.put(`http://localhost:3000/cars/${id}`, { color: color }).pipe(map(res => (res))) // или просто { color }
    car.color = color;
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car).pipe(map(res => (res)))
  }

  removeCar(car: any,) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`, car).pipe(map(res => (res)))
  }
}

