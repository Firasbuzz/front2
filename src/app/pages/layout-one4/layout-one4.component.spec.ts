import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutOne4Component } from './layout-one4.component';

describe('LayoutOne4Component', () => {
  let component: LayoutOne4Component;
  let fixture: ComponentFixture<LayoutOne4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutOne4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutOne4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
