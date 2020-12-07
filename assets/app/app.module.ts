import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { CarListComponent } from "./car/carList/carList.component";
import { AuctionComponent } from "./auction/auction.component";
import { LoginComponent } from "./auth/login/login.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes/routes";
import { AlertifyService } from "./services/alertify.service";
import { CarDetailComponent } from "./car/carDetail/carDetail.component";

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarDetailComponent,
    AuctionComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, //heryerde kullanılabilir->app.module
    ReactiveFormsModule, //heryerde kullanılabilir->app.module
    HttpClientModule, //heryerde kullanılabilir->app.module
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AlertifyService], //dışarıdan install ile alındığı için alertify burada olmalı- hangi omponent seni isterse orada çalış demek
  bootstrap: [AppComponent],
})
export class AppModule {}
