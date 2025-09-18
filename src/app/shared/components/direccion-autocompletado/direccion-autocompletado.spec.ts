import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionAutocompletado } from './direccion-autocompletado';

describe('DireccionAutocompletado', () => {
  let component: DireccionAutocompletado;
  let fixture: ComponentFixture<DireccionAutocompletado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccionAutocompletado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DireccionAutocompletado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
