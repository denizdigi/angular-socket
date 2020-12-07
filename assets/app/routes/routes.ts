import { Routes } from '@angular/router'; //aşağıdaki kod yazılınca otomotik geldi
import { AuctionComponent } from '../auction/auction.component';
import { LoginComponent } from '../auth/login/login.component';
import { CarDetailComponent } from '../car/carDetail/carDetail.component';
import { CarListComponent } from '../car/carList/carList.component';
//route işlemleri yani sayfalar arası geçiş vs için angulardaki bu yapıyı kullanacağız
export const  appRoutes: Routes = [
    { path: 'carList', component: CarListComponent }, //sana path olarak carList gelirse, component olarak carList'i aç,
    { path: 'cardetail/:carId', component: CarDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'auction', component: AuctionComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }, //tanımlananlar dışında gelirse ya da yanlış
];