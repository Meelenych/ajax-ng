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
  colors = ['rose', 'orange', 'green', 'blue', 'violet', 'black', 'purple', 'cyan', 'magenta', 'yellow']

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

  getRandColor() {
    const num = Math.floor(Math.random() * this.colors.length - 1);
    return this.colors[num]
  }

  setNewColor(car: Cars) {
    this.carsService.changeColor(car, this.getRandColor())
      .subscribe((data) => { console.log(data); });
  }

  deleteCar(car: Cars) {
    this.carsService.removeCar(car)
      .subscribe((data) => {
        this.cars = this.cars.filter(el => el.id !== car.id)
      });
  }
}
