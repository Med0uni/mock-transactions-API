import { Component, OnInit } from '@angular/core';
import { PublishMessageService } from './publish-message.service';
import { SystemMessage } from './system-message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MockTransactions-Front';
  source: string = "";
  message: string = "";
  constructor(private publish: PublishMessageService){

  }
  send():void {
    console.log(this.source, this.message);
    const obj: SystemMessage = {
      source : this.source,
      message: this.message
    }
    this.publish.publishMessage(obj).subscribe(res => console.log(res));
    }
}
