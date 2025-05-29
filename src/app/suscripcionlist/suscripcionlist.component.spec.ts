import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcionlistComponent } from './suscripcionlist.component';

describe('SuscripcionlistComponent', () => {
  let component: SuscripcionlistComponent;
  let fixture: ComponentFixture<SuscripcionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuscripcionlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuscripcionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
