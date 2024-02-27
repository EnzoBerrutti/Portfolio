import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySectionComponent } from './my-section.component';

describe('MySectionComponent', () => {
  let component: MySectionComponent;
  let fixture: ComponentFixture<MySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MySectionComponent]
    });
    fixture = TestBed.createComponent(MySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
