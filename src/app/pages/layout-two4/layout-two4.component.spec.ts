import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTwo4Component } from './layout-two4.component';

describe('LayoutTwo4Component', () => {
  let component: LayoutTwo4Component;
  let fixture: ComponentFixture<LayoutTwo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTwo4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTwo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
