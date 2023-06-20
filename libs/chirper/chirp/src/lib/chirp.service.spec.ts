import {TestBed} from '@angular/core/testing';

import {ChirpService} from './chirp.service';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('ChirpService', () => {
  let service: ChirpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(ChirpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
