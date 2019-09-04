import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroesService} from "./heroes.service";
import {Hero} from "./hero";

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
         HeroesService,
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('spyOn service getting from injector', () => {
    let heroesService = fixture.debugElement.injector.get(HeroesService);
    const alex: Hero = {
      id: 1,
      name: "alex"
    };
    const expectedHeroes: Hero[] = [alex];
    spyOn(heroesService, "getHeroes").and.returnValue(expectedHeroes);

    app.ngOnInit();

    expect(app.heroes[0].name).toBe("alex");
  });

});
