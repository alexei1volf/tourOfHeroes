import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhotoService} from "./photo.service";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  _photos: any[] = [];
  _count: number = 2;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getRandomPhotos(this._count).subscribe((response: any[]) => {
      response.forEach(photo => {
        this._photos.push(photo.urls.small);
      })
    })
  }

}
