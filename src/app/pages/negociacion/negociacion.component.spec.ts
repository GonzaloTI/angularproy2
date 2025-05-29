import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegociacionComponent } from './negociacion.component';

describe('NegociacionComponent', () => {
  let component: NegociacionComponent;
  let fixture: ComponentFixture<NegociacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegociacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NegociacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
