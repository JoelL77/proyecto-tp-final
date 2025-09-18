import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilComercio } from './perfil-comercio';

describe('PerfilComercio', () => {
  let component: PerfilComercio;
  let fixture: ComponentFixture<PerfilComercio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilComercio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilComercio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
