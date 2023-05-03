import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTwo3Component } from './layout-two3.component';

describe('LayoutTwo3Component', () => {
  let component: LayoutTwo3Component;
  let fixture: ComponentFixture<LayoutTwo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTwo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTwo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
