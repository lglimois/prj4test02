import { TestBed } from '@angular/core/testing';

import { Service01Service } from './service01.service';

describe('Service01Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Service01Service = TestBed.get(Service01Service);
    expect(service).toBeTruthy();
  });

  it('#getLibelle should return real value', () => {
    const service: Service01Service = TestBed.get(Service01Service);
    expect(service.getLibelle()).toBe('Un libelle quelconque');
    expect(service.getLibelle()).not.toBe('xxx');
  });
});
