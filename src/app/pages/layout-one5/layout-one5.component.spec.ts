import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutOne5Component } from './layout-one5.component';

describe('LayoutOne5Component', () => {
  let component: LayoutOne5Component;
  let fixture: ComponentFixture<LayoutOne5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutOne5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutOne5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
