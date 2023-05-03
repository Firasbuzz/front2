import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTwo6Component } from './layout-two6.component';

describe('LayoutTwo6Component', () => {
  let component: LayoutTwo6Component;
  let fixture: ComponentFixture<LayoutTwo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTwo6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTwo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
