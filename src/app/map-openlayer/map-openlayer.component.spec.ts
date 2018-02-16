import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOpenlayerComponent } from './map-openlayer.component';

describe('MapOpenlayerComponent', () => {
  let component: MapOpenlayerComponent;
  let fixture: ComponentFixture<MapOpenlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapOpenlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapOpenlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
