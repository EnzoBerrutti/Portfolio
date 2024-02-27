import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsSectionComponent } from './proyects-section.component';

describe('ProyectsSectionComponent', () => {
  let component: ProyectsSectionComponent;
  let fixture: ComponentFixture<ProyectsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectsSectionComponent]
    });
    fixture = TestBed.createComponent(ProyectsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
