import { TestBed } from '@angular/core/testing';

import { SancionesService } from './sanciones.service';

describe('SancionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SancionesService = TestBed.get(SancionesService);
    expect(service).toBeTruthy();
  });
});
