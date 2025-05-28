import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectolistComponent } from './prospectolist.component';

describe('ProspectolistComponent', () => {
  let component: ProspectolistComponent;
  let fixture: ComponentFixture<ProspectolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProspectolistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProspectolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
