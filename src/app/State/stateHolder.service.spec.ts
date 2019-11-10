/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StateHolderService } from './stateHolder.service';

describe('Service: StateHolder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateHolderService]
    });
  });

  it('should ...', inject([StateHolderService], (service: StateHolderService) => {
    expect(service).toBeTruthy();
  }));
});
