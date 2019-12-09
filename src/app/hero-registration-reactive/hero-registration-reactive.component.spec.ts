import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroRegistrationReactiveComponent } from './hero-registration-reactive.component';

describe('UserRegisterReactiveComponent', () => {
  let component: HeroRegistrationReactiveComponent;
  let fixture: ComponentFixture<HeroRegistrationReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroRegistrationReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroRegistrationReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
