import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEvento } from './consulta-evento';

describe('ConsultaEvento', () => {
  let component: ConsultaEvento;
  let fixture: ComponentFixture<ConsultaEvento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaEvento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaEvento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
