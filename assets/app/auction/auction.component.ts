import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css'],
  providers: [ChatService]
})
export class AuctionComponent implements OnInit {
  user: String;
  room: String;
  messageText: String;
  bidding: number;
  messageArray: Array<{ user: String, message: String }> = [];
  constructor(private _chatService: ChatService) {

      this._chatService.socket.on('new user joined', (data) => {
          console.log('data1', data)
          this.messageArray.push(data)
      });
      // this._chatService.newUserJoined()
      // .subscribe(data=> this.messageArray.push(data));


      // this._chatService.userLeftRoom()
      // .subscribe(data=>this.messageArray.push(data));

      // this._chatService.newMessageReceived()
      // .subscribe(data=>this.messageArray.push(data));
  }
  ngOnInit(){
  }

  join() {
      this._chatService.joinRoom({ user: this.user, room: this.room });
  }

  leave() {
      this._chatService.leaveRoom({ user: this.user, room: this.room });
  }

  sendMessage() {
      //console.log("bidding", this.bidding)
      this._chatService.sendMessage({ user: this.user, room: this.room, message: this.messageText }); //message:this.bidding+10
  }

}
