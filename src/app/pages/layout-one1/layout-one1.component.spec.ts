import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutOne1Component } from './layout-one1.component';

describe('LayoutOne1Component', () => {
  let component: LayoutOne1Component;
  let fixture: ComponentFixture<LayoutOne1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutOne1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutOne1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
