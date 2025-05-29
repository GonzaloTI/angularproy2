import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsuscripcionComponent } from './modalsuscripcion.component';

describe('ModalsuscripcionComponent', () => {
  let component: ModalsuscripcionComponent;
  let fixture: ComponentFixture<ModalsuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalsuscripcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalsuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
