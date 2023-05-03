import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTwo5Component } from './layout-two5.component';

describe('LayoutTwo5Component', () => {
  let component: LayoutTwo5Component;
  let fixture: ComponentFixture<LayoutTwo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTwo5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTwo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
