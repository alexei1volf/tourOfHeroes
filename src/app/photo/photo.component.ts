import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhotoService} from "./photo.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit, OnDestroy {

  _photos: any[] = [];
  _count: number = 2;
  _sub: Subscription;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this._sub = this.photoService.getRandomPhotos(this._count).subscribe((response: any[]) => {
      response.forEach(photo => {
        this._photos.push(photo.urls.small);
      })
    })
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

}
