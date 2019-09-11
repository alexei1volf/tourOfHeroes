import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroesService} from "./heroes.service";
import {Hero} from "./hero";
import {HeroesServiceMock} from "./heroes.service.mosk";
import {of} from "rxjs/observable/of";

describe('AppComponent', () => {
  let fixture;
  let app;
  let heroesServiceSpy;

  beforeEach(async(() => {
    const heroesService = jasmine.createSpyObj('HeroesService', ['getHeroes']);
    const alex: Hero = new Hero();
    alex.id = 1;
    alex.name = "alex";
    const heroes = [alex];
    heroesServiceSpy = heroesService.getHeroes.and.returnValue(
      of(heroes)
    );

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeroesComponent
      ],
      providers: [
        {provide: HeroesService, useValue: heroesService},
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should return async observable immediately', () => {
    app.ngOnInit();
    expect(app.heroes.length).toEqual(1);
  });

});
