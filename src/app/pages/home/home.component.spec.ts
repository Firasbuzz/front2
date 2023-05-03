import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTwo2Component } from './home.component';

describe('LayoutTwo2Component', () => {
  let component: LayoutTwo2Component;
  let fixture: ComponentFixture<LayoutTwo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTwo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTwo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
