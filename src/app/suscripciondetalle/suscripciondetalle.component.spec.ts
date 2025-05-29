import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripciondetalleComponent } from './suscripciondetalle.component';

describe('SuscripciondetalleComponent', () => {
  let component: SuscripciondetalleComponent;
  let fixture: ComponentFixture<SuscripciondetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuscripciondetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuscripciondetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
