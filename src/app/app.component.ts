import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service'
// import { HttpEventType } from '@angular/common/http'

interface Cars {
  id: number,
  name: string,
  color: string
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ajax-ng';

  cars: Cars[] = [];
  carName: string = '';

  constructor(private carsService: CarsService) { }

  ngOnInit() {

  }

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((data: any) => {
        this.cars = data;
        console.log(data)
      })
  }

  addCar() {
    this.carsService.addCar(this.carName)
      .subscribe((data: any) => {
        console.log(data)
        this.cars.push(data)
      });
    this.carName = '';
  }
}
