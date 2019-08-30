import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import {HeroesService} from "../heroes.service";
import {AppComponent} from "../app.component";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent
      ],
      providers: [
        HeroesService
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('header should not be visible in small mode ', () => {
    component.smallMode = true;
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('h2'));
    expect(el.nativeElement.textContent.trim()).toBe('My heroes:');
  });
});
