import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegociacionDetalleComponent } from './negociacion-detalle.component';

describe('NegociacionDetalleComponent', () => {
  let component: NegociacionDetalleComponent;
  let fixture: ComponentFixture<NegociacionDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegociacionDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NegociacionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
