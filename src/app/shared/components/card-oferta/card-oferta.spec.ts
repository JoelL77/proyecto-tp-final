import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOferta } from './card-oferta';

describe('CardOferta', () => {
  let component: CardOferta;
  let fixture: ComponentFixture<CardOferta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOferta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOferta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
