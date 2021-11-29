import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjudasFormComponent } from './ajudas-form.component';

describe('AjudasFormComponent', () => {
  let component: AjudasFormComponent;
  let fixture: ComponentFixture<AjudasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjudasFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjudasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
