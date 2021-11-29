import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjudasConcluidaComponent } from './ajudas-concluida.component';

describe('AjudasConcluidaComponent', () => {
  let component: AjudasConcluidaComponent;
  let fixture: ComponentFixture<AjudasConcluidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjudasConcluidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjudasConcluidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
