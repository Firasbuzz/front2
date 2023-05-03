import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTwo1Component } from './layout-two1.component';

describe('LayoutTwo1Component', () => {
  let component: LayoutTwo1Component;
  let fixture: ComponentFixture<LayoutTwo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTwo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTwo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
