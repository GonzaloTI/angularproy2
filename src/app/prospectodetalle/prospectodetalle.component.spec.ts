import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectodetalleComponent } from './prospectodetalle.component';

describe('ProspectodetalleComponent', () => {
  let component: ProspectodetalleComponent;
  let fixture: ComponentFixture<ProspectodetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProspectodetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProspectodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
