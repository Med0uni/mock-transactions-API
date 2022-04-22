import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SystemMessage } from './system-message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublishMessageService {

  constructor(private http:HttpClient) { }
  publishMessage(msg: SystemMessage): Observable<SystemMessage> {
    //
    return this.http.post<SystemMessage>("http://localhost:8080/publishMessage", msg);
  }
}
