import { Injectable } from '@angular/core';
declare let alertify: any; //kullanmak için declare ettik, heryer yerine sadece bu servisten handle edeceğiz

@Injectable()
export class AlertifyService {

constructor() { }

//kendi metodlarımızı oluşturuyoruz
success(message:string) {
    alertify.success(message);
  }
  warning(message:string){
    alertify.warning(message);
  }
  error(message:string){
    alertify.error(message);
  }
}
