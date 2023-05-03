import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutOne2Component } from './layout-one2.component';

describe('LayoutOne2Component', () => {
  let component: LayoutOne2Component;
  let fixture: ComponentFixture<LayoutOne2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutOne2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutOne2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
