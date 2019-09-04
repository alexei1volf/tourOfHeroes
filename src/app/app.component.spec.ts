import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroesService} from "./heroes.service";
import {Hero} from "./hero";

describe('AppComponent', () => {
  class HeroesServiceMock {
    alex: Hero = {
      id: 1,
      name: "alex"
    };
    expectedHeroes: Hero[] = [this.alex];

    getHeroes() {
      return this.expectedHeroes;
    }
  }

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

  it('should return mocked heroes', () => {
    app.ngOnInit();

    expect(app.heroes[0].name).toBe("alex");
  });

});
