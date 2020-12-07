import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarList } from '../../models/carList';

@Component({
  selector: 'app-carList',
  templateUrl: './carList.component.html',
  styleUrls: ['./carList.component.css']
})
export class CarListComponent implements OnInit {

  constructor(private http: HttpClient) { }
  carLists: CarList[] = [];

  ngOnInit() {
    this.getCarLists().subscribe((data) => {
      this.carLists = data;
    });
  }

  getCarLists() {
    return this.http.get<CarList[]>('https://localhost:44353/api/carLists');
  }

}
