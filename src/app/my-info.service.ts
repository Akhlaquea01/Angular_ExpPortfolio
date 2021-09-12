import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { IInfo } from './info.model';

@Injectable({
  providedIn: 'root'
})
export class MyInfoService {
  public _url: string = "https://iam-atts-default-rtdb.firebaseio.com/myInfo.json"
  constructor(public http: HttpClient) { }
  getInfo(): Observable<IInfo> {
    return this.http.get<IInfo>(this._url)
  }
}
