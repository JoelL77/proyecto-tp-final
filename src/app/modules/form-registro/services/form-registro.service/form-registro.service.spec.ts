import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroService } from './form-registro.service';

describe('FormRegistroService', () => {
  let component: FormRegistroService;
  let fixture: ComponentFixture<FormRegistroService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegistroService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegistroService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
