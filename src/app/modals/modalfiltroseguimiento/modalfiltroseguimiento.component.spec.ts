import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalfiltroseguimientoComponent } from './modalfiltroseguimiento.component';

describe('ModalfiltroseguimientoComponent', () => {
  let component: ModalfiltroseguimientoComponent;
  let fixture: ComponentFixture<ModalfiltroseguimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalfiltroseguimientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalfiltroseguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
