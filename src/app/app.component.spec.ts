import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroesService} from "./heroes.service";
import {Hero} from "./hero";
import {HeroesServiceMock} from "./heroes.service.mosk";

describe('AppComponent', () => {
  let fixture;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeroesComponent
      ],
      providers: [
        { provide: HeroesService, useClass: HeroesServiceMock },
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should return empty list if we don\'t take into account async', () => {
    app.ngOnInit();

    expect(app.heroes.length).toEqual(0);
  });

  it('should return not empty list if we take into account jasmine async()', async(() => {
    app.ngOnInit();

    fixture.whenStable().then(() => {
      expect(app.heroes[0].name).toEqual("alex");
    });
  }));
});
