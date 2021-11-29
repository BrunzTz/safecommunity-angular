import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjudasPendenteComponent } from './ajudas-pendente.component';

describe('AjudasPendenteComponent', () => {
  let component: AjudasPendenteComponent;
  let fixture: ComponentFixture<AjudasPendenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjudasPendenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjudasPendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
