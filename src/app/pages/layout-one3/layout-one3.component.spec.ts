import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutOne3Component } from './layout-one3.component';

describe('LayoutOne3Component', () => {
  let component: LayoutOne3Component;
  let fixture: ComponentFixture<LayoutOne3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutOne3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutOne3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
