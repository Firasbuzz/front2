import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutOne6Component } from './layout-one6.component';

describe('LayoutOne6Component', () => {
  let component: LayoutOne6Component;
  let fixture: ComponentFixture<LayoutOne6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutOne6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutOne6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
