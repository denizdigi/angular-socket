import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router"; //angulardaki modül import edildi- parametre olarak gelen route değerini okumak için kullanılır
import { CarList } from "../../models/carList";

@Component({
  selector: "app-carDetail",
  templateUrl: "./carDetail.component.html",
  styleUrls: ["./carDetail.component.css"],
})
export class CarDetailComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}
  carDetail: CarList;
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      //url'den alacak carId'yi
      return this.http
        .get<CarList>( // bu sefer CarList[] array değil tek yani CarList dönecek
          "https://localhost:44353/api/carLists/detail/" + params["carId"]
        )
        .subscribe((data) => {
          this.carDetail = data;
        });
    });
  }
}
