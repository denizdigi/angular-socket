import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Router } from "@angular/router";
import { LoginUser } from "../../models/loginUser";
import { AlertifyService } from "../../services/alertify.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private httpClient: HttpClient, private router: Router, private alertify:AlertifyService) {}

  loginUser: any = {}; //formdan alacağız
  path = "https://localhost:44353/api/auth/login";
  //return this.http.get<CarList[]>('https://localhost:44353/api/carLists');
  ngOnInit() {}

  //htmldeki submitte çalışacak olan login
  login(loginUser: LoginUser) {
    this.httpClient.post(this.path, this.loginUser).subscribe((data) => {
      //this.alertify.success("Giriş Başarılı"); //alertify is not define hatası alıyor ?? 
      this.router.navigateByUrl("/carList"); //login olunca buraya yönlendir, routes.ts deki path'de carList'e gitti o da carListComponent demek zaten
    });
  }
}
