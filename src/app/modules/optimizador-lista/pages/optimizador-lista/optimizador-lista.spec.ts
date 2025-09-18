import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizadorLista } from './optimizador-lista';

describe('OptimizadorLista', () => {
  let component: OptimizadorLista;
  let fixture: ComponentFixture<OptimizadorLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizadorLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimizadorLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
