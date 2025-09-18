import { TestBed } from '@angular/core/testing';

import { OptimizadorListaService } from './optimizador-lista.service';

describe('OptimizadorListaService', () => {
  let service: OptimizadorListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptimizadorListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
