import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcambiarestadoComponent } from './modalcambiarestado.component';

describe('ModalcambiarestadoComponent', () => {
  let component: ModalcambiarestadoComponent;
  let fixture: ComponentFixture<ModalcambiarestadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalcambiarestadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalcambiarestadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
