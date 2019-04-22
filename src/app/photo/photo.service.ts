import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class PhotoService {

  endpoint: string = 'https://api.unsplash.com';
  accessKey: string = "f70a53720c048e495627a36a95133aeb4990e046d60213d8d1700161e86568b0";

  constructor(private http: HttpClient) {
  }

  getRandomPhotos(count: number): Observable<any> {
    return this.http.get(`${this.endpoint}/photos/random?client_id=${this.accessKey}&count=${count}`);
  }
}
