import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroesService} from "./heroes.service";
import {Hero} from "./hero";
import {HeroesServiceMock} from "./heroes.service.mosk";

describe('AppComponent', () => {
  let fixture;
  let app;
  let heroesServiceSpy;

  beforeEach(async(() => {
    const heroesService = jasmine.createSpyObj('HeroesService', ['loadHeroes']);
    const alex: Hero = new Hero();
    alex.id = 1;
    alex.name = "alex";
    const heroes = [alex];
    heroesServiceSpy = heroesService.loadHeroes.and.returnValue(
      Promise.resolve(heroes)
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

  it('should return empty list if we don\'t take into account async', () => {
    app.loadHeroes();
    expect(app.heroes.length).toEqual(0);
  });

  it('should return not empty list if we take into account jasmine done()', (done) => {
    app.loadHeroes().then(() => {
      expect(app.heroes.length).toBe(1);
      done();
    });

  });
});
