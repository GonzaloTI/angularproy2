import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcontactoComponent } from './modalcontacto.component';

describe('ModalcontactoComponent', () => {
  let component: ModalcontactoComponent;
  let fixture: ComponentFixture<ModalcontactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalcontactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalcontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
