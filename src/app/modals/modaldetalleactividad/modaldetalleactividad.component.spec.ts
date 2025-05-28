import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldetalleactividadComponent } from './modaldetalleactividad.component';

describe('ModaldetalleactividadComponent', () => {
  let component: ModaldetalleactividadComponent;
  let fixture: ComponentFixture<ModaldetalleactividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModaldetalleactividadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldetalleactividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
