import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroesService} from "./heroes.service";
import {Hero} from "./hero";

class HeroesServiceMock {
  getHeroes() {
    return [{
      id: 1,
      name: "alex"
    }];
  }
}

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
        // HeroesService,
        { provide: HeroesService, useClass: HeroesServiceMock },
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

/*  it('spyOn service getting from injector', () => {
    let heroesService = fixture.debugElement.injector.get(HeroesService);
    const alex: Hero = {
      id: 1,
      name: "alex"
    };
    const expectedHeroes: Hero[] = [alex];
    spyOn(heroesService, "loadHeroes").and.returnValue(Promise.resolve([expectedHeroes]));

    app.ngOnInit();

    expect(app.heroes.length).toBeLessThan(0);
  });*/

  it('mock service in provider', () => {
    let heroesService = fixture.debugElement.injector.get(HeroesService);
    const alex: Hero = {
      id: 1,
      name: "alex"
    };
    const expectedHeroes: Hero[] = [alex];

    app.ngOnInit();

    expect(app.heroes[0].id).toBe(1);
  });

  //async
/*  it('should return empty list if we don\'t take into account async', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    let heroesService = fixture.debugElement.injector.get(HeroesService);
    const alex: Hero = {
      id: 1,
      name: "alex"
    };
    const expectedHeroes: Hero[] = [alex];
    spyOn(heroesService, "loadHeroes").and.returnValue(Promise.resolve([expectedHeroes]));

    app.ngOnInit();

    expect(app.heroes.length).toEqual(0);
  });

  it('should return not empty list if we take into account jasmine async()', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    let heroesService = fixture.debugElement.injector.get(HeroesService);

    const alex: Hero = {
      id: 1,
      name: "alex"
    };
    const expectedHeroes: Hero[] = [alex];
    spyOn(heroesService, "loadHeroes").and.returnValue(Promise.resolve([expectedHeroes]));

    app.ngOnInit();

    fixture.whenStable().then(() => {
      expect(app.heroes).toEqual([expectedHeroes]);
    });
  }));*/
});
