import { Component, OnInit } from '@angular/core';
import { PublishMessageService } from '../publish-message.service';
import { SystemMessage } from '../system-message';

@Component({
  selector: 'app-system-message',
  templateUrl: './system-message.component.html',
  styleUrls: ['./system-message.component.css']
})
export class SystemMessageComponent implements OnInit {
  msg: SystemMessage = new SystemMessage();

  constructor(private service:PublishMessageService) { }

  ngOnInit(): void {
    this.service.publishMessage(this.msg).subscribe(
    );
  }

}
