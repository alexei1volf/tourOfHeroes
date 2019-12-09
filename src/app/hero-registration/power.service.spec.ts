import { TestBed } from '@angular/core/testing';
import {PowerService} from './power.service';

describe('PowerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PowerService = TestBed.get(PowerService);
    expect(service).toBeTruthy();
  });
});
