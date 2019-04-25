import {Component, OnInit} from '@angular/core';
import {PhotoService} from "./photo.service";
import {Observable} from "rxjs";

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  _photos: any[] = [];
  _count: number = 1;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    const sourceTwo = Observable.fromEvent(document, 'click');
    const exampleTwo = sourceTwo.switchMap(val => this.photoService.getRandomPhotos(this._count));
    exampleTwo.subscribe((response: any[]) => {
      response.forEach(photo => {
        this._photos.push(photo.urls.full);
      })
    });
  }

}
